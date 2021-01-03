// --- Day 2: Password Philosophy ---
// https://adventofcode.com/2020/day/2

// Dependencies
var fileHandler = require('../helper/fileHandler')
var data = fileHandler.getFile("data.txt")

var maxRow = data.length - 1
var maxColumn = data[0].length - 1

function getCountOfTrees(stepRight, stepDown) {
    var reachBottom = false
    var countOfTrees = 0
    var column = 0
    var row = 0

    while (!reachBottom) {
        row += stepDown
        column += stepRight

        if (column >= maxColumn) {
            column %= (maxColumn + 1) //Fixing offset
        }
        if (data[row][column] == "#") {
            countOfTrees++
        }
        if (row == maxRow) {
            reachBottom = true
        }
    }
    return countOfTrees
}


var countOfTrees1 = getCountOfTrees(1, 1) // right 1, down 1
var countOfTrees2 = getCountOfTrees(3, 1) // right 3, down 1
var countOfTrees3 = getCountOfTrees(5, 1) // right 5, down 1
var countOfTrees4 = getCountOfTrees(7, 1) // right 7, down 1
var countOfTrees5 = getCountOfTrees(1, 2) // right 1, down 2

var result = countOfTrees1 * countOfTrees2 * countOfTrees3 * countOfTrees4 * countOfTrees5


// Saving to log
var data = { "result": result }
var fileName = "result_part2.json"
fileHandler.setResult(fileName, data)