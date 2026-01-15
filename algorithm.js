// Algorithm code starts here...

// Have the required updates stored in an array for visualization later
const updateList = []
// {
//    x: x,
//    y: y,
//    value: value
// }

// To get tall the values in the row/col/grid and eliminate values that are found
// 
function eliminate(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j].value != 0) continue
      let eliminationSet = data[i][j].row
      eliminationSet = eliminationSet.union(data[i][j].col)
      eliminationSet = eliminationSet.union(data[i][j].subgrid)
      let possibles = Cell.values.difference(eliminationSet)
      // console.log(possibles, i, j)
      data[i][j].possibleValues = data[i][j].possibleValues.intersection(possibles)
      // data[i][j].possibleValues = possibles
      let a = Array.from(data[i][j].possibleValues).join(',')
      setValue(i, j, `<span class="small">${a}</span>`)
    }

  }
}
eliminate(result)
