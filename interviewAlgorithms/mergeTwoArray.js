
function mergeSortedArray (a, b) {
    var merged = []
    var aElm = a[0]
    var bElm = b[0]
    var i = 1
    var j = 1

    if (a.length === 0) {
        return b
    }
    if (b.length === 0) {
        return a
    }

    while (aElm || bElm) {
        if ((aElm && !bElm) || aElm < bElm) {
            merged.push(aElm)
            aElm = a[i++]
        } else {
            merged.push(bElm)
            bElm = b[j++]
        }
    }
    return merged
}
