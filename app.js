const board = document.getElementById("board");
const cols = document.getElementsByClassName("col");

let user = true;
let game = true;

let rowCount = 0;
let colCount = 0;

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

const rowcheck = (x, y) => {
  rowCount = 0;
  let rightY = y - 1;
  let leftY = y + 1;
  const now = arr[x][y];
  while (rightY > 0) {
    if (arr[x][rightY] === now) {
      rowCount = rowCount + 1;
      rightY--;
    } else {
      break;
    }
  }
  while (leftY < 18) {
    if (arr[x][leftY] === now) {
      rowCount = rowCount + 1;
      leftY++;
    } else {
      break;
    }
  }

  if (rowCount > 3) {
    return setTimeout(() => alert("가로!!!!!!!!!!"), 1);
  }
};

const colcheck = (x, y) => {
  colCount = 0;
  let topX = x - 1;
  let bottomX = x + 1;
  const now = arr[x][y];
  while (topX > 0) {
    if (arr[topX][y] === now) {
      colCount = colCount + 1;
      topX--;
    } else {
      break;
    }
  }
  while (bottomX < 18) {
    if (arr[bottomX][y] === now) {
      colCount = colCount + 1;
      bottomX++;
    } else {
      break;
    }
  }

  if (colCount > 3) {
    return setTimeout(() => alert("세로!!!!!!!!!!"), 1);
  }
};

const crossCheck1 = (x, y) => {
  // 모양\
  crossCount = 0;
  let leftX = x - 1;
  let leftY = y - 1;
  let rightX = x + 1;
  let rightY = y + 1;
  const now = arr[x][y];
  while (leftX > 0 || leftY > 0) {
    if (arr[leftX][leftY] === now) {
      crossCount = crossCount + 1;
      leftX--;
      leftY--;
    } else {
      break;
    }
  }
  while (rightX < 18 || rightY < 18) {
    if (arr[rightX][rightY] === now) {
      crossCount = crossCount + 1;
      rightX++;
      rightY++;
    } else {
      break;
    }
  }

  if (crossCount > 3) {
    return setTimeout(() => alert("대각선1!!!!!!!!!!"), 1);
  }
};

const crossCheck2 = (x, y) => {
  // 모양/
  crossCount = 0;
  let leftX = x + 1;
  let leftY = y - 1;
  let rightX = x - 1;
  let rightY = y + 1;
  const now = arr[x][y];
  while (leftX < 18 || leftY > 0) {
    if (arr[leftX][leftY] === now) {
      crossCount = crossCount + 1;
      leftX++;
      leftY--;
    } else {
      break;
    }
  }
  while (rightX > 0 || rightY < 18) {
    if (arr[rightX][rightY] === now) {
      crossCount = crossCount + 1;
      rightX--;
      rightY++;
    } else {
      break;
    }
  }

  if (crossCount > 3) {
    return setTimeout(() => alert("대각선2!!!!!!!!!!"), 1);
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

  rowcheck(parseInt(row), parseInt(col));
  colcheck(parseInt(row), parseInt(col));

  crossCheck1(parseInt(row), parseInt(col));
  crossCheck2(parseInt(row), parseInt(col));
}

if (cols) {
  if (game) {
    Array.from(cols).forEach((col) =>
      col.addEventListener("click", handleClick)
    );
  }
}
