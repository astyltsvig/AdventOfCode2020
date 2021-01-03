// --- Day 2: Password Philosophy ---
// https://adventofcode.com/2020/day/2

// Dependencies
var fileHandler = require('../helper/fileHandler')
var data = fileHandler.getFile("data.txt")

// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
String.prototype.count = function (s1) {
    return (this.length - this.replace(new RegExp(s1, "g"), '').length) / s1.length;
}

var countOfValidPassword = 0

data.forEach(row => {
    var password = row.split(":")[1]
    var policy = row.split(":")[0]
    var policyMin = policy.split("-")[0]
    var policyMax = policy.split("-")[1].split(" ")[0]
    var letter = policy.split(" ")[1]
    console.log(policyMin, policyMax, letter, password)

    if (password.count(letter) >= policyMin && password.count(letter) <= policyMax) {
        console.log("VALID PASSWORD")
        countOfValidPassword++
    }
})

// Saving to log
var data = { "result": countOfValidPassword }
var fileName = "result_part1.json"
fileHandler.setResult(fileName, data)