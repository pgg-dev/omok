const table = document.getElementsByTagName("table");

for (let i = 0; i < 19; i++) {
  table[0].appendChild(document.createElement("tr"));
  for (let j = 0; j < 19; j++) {
    const tr = document.getElementsByTagName("tr");
    tr[i].className = "tr";
    tr[i].appendChild(document.createElement("td"));
  }
}
