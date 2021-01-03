var fs = require('fs');

module.exports.loadData = (fileName) => {
    try {
        var data = fs.readFileSync(fileName, 'utf8');
        var arr = data.toString().split("\n");
        return arr
    } catch (e) {
        console.log('Error:', e.stack);
    }
}
