const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./scraped_data.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY, title TEXT UNIQUE, description TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, title TEXT UNIQUE)");
  db.run("CREATE TABLE IF NOT EXISTS cookies (id INTEGER PRIMARY KEY, name TEXT, value TEXT, domain TEXT, path TEXT, expires INTEGER, size INTEGER, httpOnly INTEGER, secure INTEGER, session INTEGER, sameSite TEXT)");
});

module.exports = db;