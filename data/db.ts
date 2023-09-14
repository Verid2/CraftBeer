const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1", // Replace with your MySQL host
  user: "admin", // Replace with your MySQL username
  password: "123456", // Replace with your MySQL password
  database: "hoppharbourdB", // Replace with your MySQL database name
});

connection.connect((err: any) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = connection;