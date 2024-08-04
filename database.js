const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./scraped_data.db');

db.serialize(() => {
  // v1.0
  db.run("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, title TEXT UNIQUE, data TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS quiz (id INTEGER PRIMARY KEY, title TEXT UNIQUE, description TEXT, category_id INTEGER, FOREIGN KEY(category_id) REFERENCES categories(id))");
  db.run("CREATE TABLE IF NOT EXISTS cookies (id INTEGER PRIMARY KEY, name TEXT, value TEXT, domain TEXT, path TEXT, expires INTEGER, size INTEGER, httpOnly INTEGER, secure INTEGER, session INTEGER, sameSite TEXT)");
});

module.exports = db;