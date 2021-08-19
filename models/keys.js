const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("keys");

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS keys (id INTEGER PRIMARY KEY, content TEXT, expiration INTEGER)");
})

db.close();