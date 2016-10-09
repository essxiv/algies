// 0 Log (1)

let dataStructure = [
  {payload: 'this payload #1'},
  {payload2: 'this payload #1'},
  {payload3: 'this payload #1'},
  {payload4: 'this payload #1'},
  {payload5: 'this payload #1'},
  {payload6: 'this payload #1'}
]

function findFirstItem (items) {
  return items[0]
}

console.log(findFirstItem(dataStructure))