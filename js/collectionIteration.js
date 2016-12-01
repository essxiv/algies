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
        if(!test(value)) {
            results.push(value)
        }
    })
    return results
}

_.uniq = function (array) {
    var result = []
    _.each(array, function (value) {
        if (_.indexOf(result, value) === -1) {
            result.push(value)
        }
    })
    return result
}

_.map = function (collection, iterator) {
    var result = []
    _.each(collection, function (value, key, collection) {
        result.push(iterator(value, key, collection))
    })
    return result
}

_.pluck = function (collection, key) {
    return _.map(collection, function(item) {
        return item[key]
    })
}

_.reduce = function (collection, iterator, accumulator) {
    var accumulator = accumulator
    _.each(collection, function (value) {
        if (accumulator === undefined) {
            accumulator = value
        } else {
            accumulator = iterator(accumulator, value)
        }
    })
    return accumulator
}
