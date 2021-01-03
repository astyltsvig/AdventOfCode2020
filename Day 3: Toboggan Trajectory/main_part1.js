// --- Day 2: Password Philosophy ---
// https://adventofcode.com/2020/day/2

// Dependencies
var fileHandler = require('../helper/fileHandler')
var data = fileHandler.getFile("data.txt")


var countOfTree = 0
var maxRow = data.length - 1
var maxColumn = data[0].length - 1

var column = 0
var row = 0

var stepDown = 1
var stepRight = 3

var reachBottom = false

while (!reachBottom) {
    row += stepDown
    column += stepRight

    if (column >= maxColumn) {
        column %= (maxColumn + 1) //Fixing offset
    }
    if (data[row][column] == "#") {
        countOfTree++
    }
    if (row == maxRow) {
        reachBottom = true
    }
}


// Saving to log
var data = { "result": countOfTree }
var fileName = "result_part1.json"
fileHandler.setResult(fileName, data)