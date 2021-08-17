const fs = require("fs");

module.exports = (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);

        const rendered = content.toString();

        return callback(null, rendered);
    })
}