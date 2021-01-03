// --- Day 2: Password Philosophy ---
// https://adventofcode.com/2020/day/2

// Dependencies
var fileHandler = require('../helper/fileHandler')
var data = fileHandler.getFile("data.txt")

// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript

var countOfValidPassword = 0

data.forEach(row => {
    var password = row.split(":")[1]
    var policy = row.split(":")[0]
    var position1 = policy.split("-")[0]
    var position2 = policy.split("-")[1].split(" ")[0]
    var letter = policy.split(" ")[1]
    if (
        (password[position1] == letter && password[position2] !== letter) ||
        (password[position2] == letter && password[position1] !== letter)) {
        console.log(position1)
        console.log(position2)
        console.log(letter)
        console.log(password)
        console.log("VALID PASSWORD")
        countOfValidPassword++
    }
})

// Saving to log
var data = { "result": countOfValidPassword }
var fileName = "result_part2.json"
fileHandler.setResult(fileName, data)