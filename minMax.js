function minMaxAlg (array) {
    var min = array[0]
    var max = array[0]
    for (var i = 0; array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
        if (max < array[i]) {
            max = array[i]
        }
    }
}
