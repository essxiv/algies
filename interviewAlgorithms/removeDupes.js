
function removeDupes (arr) {
    var exists = {}
    var outArr = []
    var elm

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i]
        if (!exists[elm]) {
            outArr.push(elm)
            exists[elm] = true
        }
    }
    return outArr
}
