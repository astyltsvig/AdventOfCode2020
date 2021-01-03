
// Prepare the data by
// 1. Parsing the string to int
// 2. Sort the array, from low to high
module.exports.formatData = (arr) => {
    var arr = arr.map(item => {
        return parseInt(item)
    })

    arr.sort(function (a, b) {
        if (a < b) return -1
        if (a > b) return 1
        if (a == b) return 0
    })

    return arr

}

module.exports.cleanData = (arr, SUM) => {
    var clean = false
    while (!clean) {
        let maxVal = arr.length - 1
        var result = arr[0] + arr[maxVal]
        if (result == SUM) {
            console.log("FOUND AFTER " + attemt + " attemts")
            console.log(arr[min] + " + " + arr[maxVal] + " = " + result)
            console.log(arr[min] + " * " + arr[maxVal] + " = " + arr[min] * arr[maxVal])
            found = true
        }
        else if (result > SUM) {
            arr.pop()
        }
        else if (result < SUM) {
            clean = true
        }
    }
    return arr
}

module.exports.cleanData2 = (arr, SUM) => {
    var clean = false
    while (!clean) {
        let maxVal = arr.length - 1
        var result = arr[0] + arr[1] + arr[maxVal]
        if (result == SUM) {
            console.log("FOUND AFTER " + attemt + " attemts")
            console.log(arr[min] + " + " + arr[maxVal] + " = " + result)
            console.log(arr[min] + " * " + arr[maxVal] + " = " + arr[min] * arr[maxVal])
            found = true
        }
        else if (result > SUM) {
            arr.pop()
        }
        else if (result < SUM) {
            clean = true
        }
    }
    return arr
}