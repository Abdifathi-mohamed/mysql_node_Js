// Establishing Connection

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb"
});

// CREATE DATABASE in Node.js

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

// SHOW DATABASES in Node.js

    con.query("SHOW DATABASES", function (err, result,) {
        if (err) throw err;
          console.log("Showing databases\n");
        for (var i = 0; i < result.length; i++) {
            console.log(JSON.stringify(result[i]));
    }
    }); 

    con.end();

});

// CREATE TABLE in Node.js

var qry = `CREATE TABLE if not exists employee (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(25) not null,
    age INT,
    salary float
)`;

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
   
// SHOW TABLES in Node.js

 con.query("SHOW TABLES", function (err, result) {
    if (err) throw err;
      console.log("Showing tables\n");
    for (var i = 0; i < result.length; i++) {
        console.log(JSON.stringify(result[i]));
    } 
 })
 con.end();
});

con.query("DESC employee", function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result));
});



// insert data in table in Node.js

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb"
});

var qry = `INSERT INTO employee (name, age, salary) VALUES ('Hussen', 60, 40000.00)`;
var qry = `INSERT INTO employee (name, age, salary) VALUES ('Ali', 50, 59000.00)`;
var qry = `INSERT INTO employee (name, age, salary) VALUES ('Hassan', 43, 20000.00)`;

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    
  
});

// MySQL Select From

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb"
});

var qry = `SELECT name, salary FROM employee`;

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
    });
    con.end();
  
});

// MySQL DELETE

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb"
});

var qry = `DELETE FROM employee WHERE age = 50`;

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
    });
    con.end();
  
});

// MySQL Update

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb"
});

var qry = `UPDATE employee SET salary = salary + 2000`;

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log("Records updated successfully");
    });
    con.end();
  
});

