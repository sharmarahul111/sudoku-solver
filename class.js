class Cell {
  constructor(grid, x, y) {
    this.grid = grid
    this.x = x
    this.y = y
    this.value = this.grid[x][y] // 0-9
    this.possibleValues = []
    this.type = type(this.value) // int | array | null
  }
  get row() {
    let arr = []
    this.grid[this.x].forEach((elm, i) => {
      if (elm !== 0 && i != this.y) arr.push(elm)
    });
    return arr
  }
  get col() {
    let arr = []
    this.grid.forEach((row, j) => {
      if (row[this.y] !== 0 && j != this.x) arr.push(row[this.y])
    })
    return arr
  }
  get subgrid() {
    let startx = this.x - this.x % 3
    let starty = this.y - this.y % 3
    let arr = []
    for (let i = startx; i < 3 + startx; i++) {
      for (let j = starty; j < 3 + starty; j++) {
        if (this.grid[i][j] !== 0 && !(i == this.x && j == this.y)) arr.push(this.grid[i][j])
      }
    }
    return arr
  }
}
