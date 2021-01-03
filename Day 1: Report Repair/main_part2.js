// --- Day 1: Report Repair --- Part 1
// https://adventofcode.com/2020/day/1

const SUM = 2020

// Dependencies
var fileHandler = require('../helper/fileHandler')
var formatter = require('./formatter')

// Prepare the data by
// 1. Load the data from file
// 2. Parse the strings to int
// 3. Sort it from low to high
// 4. Pops all high values from array that exceeds SUM by addition with the lowest val.
// - Not a reason to keep values that will exceeds SUM anyways

var arr = fileHandler.getFile('data.txt')
var arr = formatter.formatData(arr)
var arr = formatter.cleanData2(arr, SUM)

// A while loop containing 3 if statements
// 1. If the min and max from arr is greater than SUM then removes the last item from array
// 2. If the min and max from arr is lower than SUM then removes the first item from array
// 3. If the min and max from arr is equal to SUM then the loop stops
var found = false
var attemt = 0
let min = 0
let middle = 1
let max
let result

while (!found) {
    attemt++
    max = arr.length - 1
    result = arr[min] + arr[middle] + arr[max]

    if (result > SUM) {
        arr.pop()
    }
    else if (result < SUM) {
        if (middle < max) {
            middle++
        }
        else {
            middle = 1
            arr.shift()
        }
    }
    else if (result == SUM) {
        console.log("FOUND AFTER " + attemt + " attemts")
        console.log(arr[min] + " + " + arr[middle] + " + " + arr[max] + " = " + result)
        console.log(arr[min] + " * " + arr[middle] + " * " + arr[max] + " = " + arr[min] * arr[middle] * arr[max])
        found = true
    }
}

// Saving to log
var answer = arr[min] * arr[middle] * arr[max]
var data = {
    "result": answer, "data": {
        "min": arr[min], "middle": arr[middle], "max": arr[max], "countOfAttemts": attemt
    }
}
var fileName = "result_part2.json"
fileHandler.setResult(fileName, data)