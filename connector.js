//Connector for sqlite3 database
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("sample.db");

// returns a promise that resolves to the query results

function queryDatabase(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        console.error("Database error:", err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

class Worker extends User {
  constructor(name, email, position) {
    super(name, email);
    this.position = position;
  }

  position() {
    return this.position;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static fromRow(row) {
    return new User(row.id, row.name, row.email);
  }

  static async getAllUsers() {
    const rows = await queryDatabase("SELECT * FROM users");
    return rows.map(User.fromRow);
  }

  static async getUserById(id) {
    const rows = await queryDatabase("SELECT * FROM users WHERE id = ?", [id]);

    if (rows.length > 0) {
      return User.fromRow(rows[0]);
    } else {
      return null;
    }
  }
}

const alice = User.fromRow({
  name: "Alice",
  email: "alice@example.com",
});

const newWorker = new Worker("Alice", "alice@example.com", "Software Engineer");

newWorker.position(); // "Software Engineer"

const addNewUser = (name, email) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)",
      );
      db.run(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this);
          }
        },
      );
    });
  });
};

module.exports = {
  queryDatabase,
  addNewUser,
};
