const board = document.getElementById("board");
const cols = document.getElementsByClassName("col");

let user = true;

let rowCount = 0;
let rowValue = null;
let rowNext = null;

let colCount = 0;
let colValue = null;
let colNext = null;

let crossCount = 0;
let crossValue = null;
let crossNext = null;

var arr = Array(19)
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

const check = () => {
  for (let i = 0; i < 18; i++) {
    rowCount = 0;
    colCount = 0;

    if (crossValue && crossNext && crossValue === crossNext) {
      crossCount = crossCount + 1;
    }

    for (let j = 0; j < 18; j++) {
      colValue = arr[j][i];
      colNext = arr[j + 1][i];

      if (colValue && colNext && colValue === colNext) {
        colCount = colCount + 1;
      }

      rowValue = arr[i][j];
      rowNext = arr[i][j + 1];
      if (rowValue && rowNext && rowValue === rowNext) {
        rowCount = rowCount + 1;
      }

      if (colCount === 4 || rowCount === 4 || crossCount === 4) {
        setTimeout(() => alert("!!!!!!!!!!"), 1);
        colCount = 0;
        rowCount = 0;
      }
    }
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

  check();
}

if (cols) {
  Array.from(cols).forEach((col) => col.addEventListener("click", handleClick));
}
