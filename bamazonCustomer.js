var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,
  user: "root",
  password: "root",
  database: "top_songsdb"
});

connection.connect(function(err) {
    if (err) throw err;
  });

  function start() {
    //
    inquirer.prompt([{
        type: input,
        name: id,
        message: "What is the ID of the product you would like to buy?"
    }])
};