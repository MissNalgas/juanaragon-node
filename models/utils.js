const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("keys");

function makeKey(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const generateKey = async (expiration) => {
    return new Promise((resolve, reject) => {

        const content = makeKey(22);
        db.run("INSERT INTO keys (content, expiration) VALUES (?, ?)", [content, expiration], (err) => {
            if (err) return reject(err);

            resolve(content);
        })
    });
}

const validateKey = async (key) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM keys WHERE content=?", key, (err, dkey) => {
            if (err || !(dkey)) return reject(key);
            console.log("key", dkey);
            if (Date.now() >= dkey.expiration) {
                return reject("Key expired");
            } else {
                return resolve();
            }
        })
    })
}

module.exports = {generateKey, validateKey};