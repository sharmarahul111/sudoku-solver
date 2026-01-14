// import data from './data.json' with { type: 'json' };
// console.log(data)
const data = JSON.parse(`{"newboard":{"grids":[{"value":[[5,0,0,0,0,0,0,0,9],[0,0,0,0,0,0,0,7,0],[2,7,0,3,0,6,4,0,0],[0,4,0,0,0,0,9,0,0],[0,6,0,0,0,9,0,0,0],[0,0,5,1,0,0,0,0,4],[0,0,0,0,0,0,0,0,7],[0,0,7,0,3,0,0,0,0],[0,0,0,0,0,0,0,3,0]],"solution":[[5,1,4,2,8,7,3,6,9],[6,3,9,4,1,5,2,7,8],[2,7,8,3,9,6,4,1,5],[3,4,1,7,2,8,9,5,6],[7,6,2,5,4,9,1,8,3],[8,9,5,1,6,3,7,2,4],[1,8,3,9,5,2,6,4,7],[4,5,7,6,3,1,8,9,2],[9,2,6,8,7,4,5,3,1]],"difficulty":"Hard"}],"results":1,"message":"All Ok"}}`)
const grid = data.newboard.grids[0].value
// initializing the data
let result = []
for (let i = 0; i < grid.length; i++) {
  result[i] = []
  for (let j = 0; j < grid[i].length; j++) {
    result[i].push(new Cell(grid, i, j))
  }
}


// dynamically add row/comumn div to html file
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

// Helper function to set numeric value give x,y coordinates
function setValue(x, y, val) {
  section.querySelectorAll("div.row")[x].
    querySelectorAll("div.col")[y].innerHTML = val

}
// Set the value of whole grid all at once
function setGrid(data) {
  data.forEach((row, i) => {
    row.forEach((col, j) => {
      setValue(i, j, col.value)

    })
  });
}

setGrid(result)
