var fs = require('fs');

module.exports.getFile = (fileName) => {
    try {
        var data = fs.readFileSync(fileName, 'utf8');
        var arr = data.toString().split("\n");
        return arr
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

module.exports.setResult = (fileName, data) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(data));
        console.log("FILE SAVED")
        console.log(fileName)
        return 1
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

