const section = document.querySelector("section.main")

function setValue(x, y, val) {
  // console.log(x,y,val, section.que)
  section.querySelectorAll("div.row")[x].
    querySelectorAll("div.col")[y].innerHTML = val

}

function setGrid(data) {
  data.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col) setValue(i, j, col)
    })
  });
}

setGrid(result)
