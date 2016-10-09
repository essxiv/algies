// O Log(n)

let dataStructure = [
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'}
]

function findItem (items, match) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].payload === match) {
      return true
    }
  }
  return false
}
// console.log(dataStructure[0].payload)
console.log(findItem(dataStructure, dataStructure[3].payload))
