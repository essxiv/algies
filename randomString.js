var listOfChars = "abcdefghijklmnopqrstuvwxyz9876543210"

function randomStringGenerator (stringLength) {
    var tmp = ''
    var listLength = listOfChars.length

    for (i = 0; i < stringLength; i++) {
        tmp += listOfChars.charAt(Math.floor(Math.random() * listLength))
    }
    return tmp
}

console.log(randomStringGenerator(5))
