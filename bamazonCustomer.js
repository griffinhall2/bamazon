var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table") 

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
        start();
});

var start = function() {
    connection.query("SELECT * FROM Products", function(err, res) {


