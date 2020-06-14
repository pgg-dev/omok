const board = document.getElementById("board");
const cols = document.getElementsByClassName("col");

let user = true;
let game = true;

let xIndex = [];
let yIndex = [];

let crossCount = 0;
let xCount = 0;
let yCount = 0;

let arr = Array(19)
  .fill(null)
  .map(() => Array());

for (let i = 0; i < 19; i++) {
  const row = board.appendChild(document.createElement("div"));
  row.className = "row";
  row.id = i;
  for (let j = 0; j < 19; j++) {
    const col = document.createElement("div");
    col.className = "col";
    col.id = j;
    row.appendChild(col);
  }
}

const indexCheck = (x, y) => {
  xIndex = [];
  yIndex = [];
  for (let i = x + 4; i > x - 5; i--) {
    if (x !== i && 0 <= i && i < 19) {
      xIndex.push(i);
    }
  }
  for (let j = y + 4; j > y - 5; j--) {
    if (y !== j && 0 <= j && j < 19) {
      yIndex.push(j);
    }
  }

  console.log(`[${x}, ${y}]`);
  console.log("xIndex");
  console.log(xIndex);
  console.log("yIndex");
  console.log(yIndex);

  valueCheck(x, y);
};

const valueCheck = (x, y) => {
  xCount = 0;
  yCount = 0;
  crossCount = 0;

  xIndex.forEach((i) => {
    if (arr[x][y] === arr[i][y]) {
      xCount = xCount + 1;
    }
  });

  yIndex.forEach((j) => {
    if (arr[x][y] === arr[x][j]) {
      yCount = yCount + 1;
    }
  });

  const a = xIndex.length > yIndex.length ? yIndex : xIndex;

  for (let i = 0; i < a.length; i++) {
    const b = xIndex[i];
    const c = yIndex[i];

    let reverseArr = yIndex;
    reverseArr = yIndex.reverse();

    const d = reverseArr[i];
    if (arr[x][y] === arr[b][c]) {
      crossCount = crossCount + 1;
    }
    if (arr[x][y] === arr[b][d]) {
      crossCount = crossCount + 1;
    }
  }

  if (yCount > 3 || xCount > 3 || crossCount > 3) {
    return setTimeout(() => alert("!!!!!!!!!!"), 1);
  }
};

function handleClick(e) {
  const row = e.target.parentNode.id;
  const col = e.target.id;

  if (!arr[row][col]) {
    if (user) {
      arr[row][col] = 1;
      e.target.style = "background: black; border-radius: 50%;";
    } else {
      arr[row][col] = 2;
      e.target.style = "background: white; border-radius: 50%;";
    }
    user = !user;
  }

  indexCheck(parseInt(row), parseInt(col));
}

if (cols) {
  if (game) {
    Array.from(cols).forEach((col) =>
      col.addEventListener("click", handleClick)
    );
  }
}
