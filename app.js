const board = document.getElementById("board");

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

const cols = document.getElementsByClassName("col");

let arr = [];
let user = true;

function handleClick(e) {
  user = !user;
  const row = e.target.parentNode.id;
  const col = e.target.id;
  arr[row] = [];
  if (user) {
    arr[row][col] = 1;
    e.target.style = "background: black; border-radius: 50%;";
  } else {
    arr[row][col] = 2;
    e.target.style = "background: white; border-radius: 50%;";
  }
}

if (cols) {
  Array.from(cols).forEach((col) => col.addEventListener("click", handleClick));
}
