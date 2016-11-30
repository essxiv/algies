var _ = {}

_.first = function (array, index) {
    if (n === undefined) {
        return array[0]
    } else {
        return array.slice(0, n)
    }
}

_.last = function (array, index) {
    if (n === undefined) {
        return array[array.length-1]
    } else if (n > array.length-1) {
        return array
    } else {
        return array.slice(array.length-n, array.length)
    }
}

_.indexOf = function (array, target) {
    var result = -1
    _.each(array, function (item, index) {
        if (item === target && result === -1) {
            result = index
        }
    })
    return result
}

_.filter = function (collection, test) {
    var results = []
    _.each(collection, function(value) {
        // implement test method you choose
        if (test(val)) {
            results.push(value)
        }
    })
    return results
}

_.reject = function (collection, test) {
    var results = []
    _.each(collection, function (value) {
        if(!test(value) {
            results.push(value)
        })
    })
    return results
}
