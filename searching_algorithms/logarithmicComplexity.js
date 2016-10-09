// O (log n)
// Binary search

let dataStructure = [
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'},
  {payload: 'this payload #1'}
]

function findItemBinarySearch (items, match) {
  var low = 0
  var high = items.length - 1
  while (low <= high) {
    var mid = parseInt((low + high) / 2)
    var current = items[mid]
    if (current > match) {
      high = mid - 1
    } else if (current < match) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(findItemBinarySearch(dataStructure, dataStructure[3]))
