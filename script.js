const section = document.querySelector("section.main")
let text = "";
for (let i = 0; i < 9; i++) {
  text += `<div class="row">`
  for (let j = 0; j < 9; j++) {
    text += `<div class="col"></div>`
  }
  text += `</div>`
}
section.innerHTML = text
function setValue(x, y, val) {
  // console.log(x,y,val, section.que)
  section.querySelectorAll("div.row")[x].
    querySelectorAll("div.col")[y].innerHTML = val

}

function setGrid(data) {
  data.forEach((row, i) => {
    row.forEach((col, j) => {
      setValue(i, j, col.value)

    })
  });
}

setGrid(result)
