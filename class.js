class Cell {
  static values = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  constructor(grid, x, y) {
    this.grid = grid
    this.x = x
    this.y = y
    this.value = this.grid[x][y] // 0-9
    this.possibleValues = new Set()
  }
  // get set of values in corresponding row
  get row() {
    let arr = []
    this.grid[this.x].forEach((elm, i) => {
      if (elm !== 0 && i != this.y) arr.push(elm)
    });
    return new Set(arr)
  }
  // get set of values in corresponding column
  get col() {
    let arr = []
    this.grid.forEach((row, j) => {
      if (row[this.y] !== 0 && j != this.x) arr.push(row[this.y])
    })
    return new Set(arr)
  }
  // get set of values in corresponding subgrid
  get subgrid() {
    let startx = this.x - this.x % 3
    let starty = this.y - this.y % 3
    let arr = []
    for (let i = startx; i < 3 + startx; i++) {
      for (let j = starty; j < 3 + starty; j++) {
        if (this.grid[i][j] !== 0 && !(i == this.x && j == this.y)) arr.push(this.grid[i][j])
      }
    }
    return new Set(arr)
  }
}
