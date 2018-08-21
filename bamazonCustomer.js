var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table")

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazondb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    start();
});

var start = function () {
    connection.query("SELECT * FROM products", function (err, res) {

        var table = new Table({
            head: ["item_id", "product_name", "price", "stock_quantity"],
            colWidths: [10, 40, 10, 10]
        });
        for (var i = 0; i < res.length; i++) {
            var productArray = [res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity];
            table.push(productArray);
        }
        console.log(table.toString());
        chooseItem();
    })
};

var chooseItem = function () {
    inquirer.prompt([{
        name: "Item",
        type: "input",
        message: "What is the id of the item you would like to purchase?",
        validate: function (value) {

            //Validates answer
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log("\n Choose the item id you want to purchase.\n");
                return false;
            }
        }
    },
    //asks the customer for the quantity of the item
    {
        name: "quantity",
        type: "input",
        message: "How many do you want to purchase?",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log("\nPlease enter a valid quantity\n");
                return false;
            }
        }
    }]).then(function (answer) {
        var ItemInt = parseInt(answer.quantity);

        //Queries the database
        connection.query("SELECT * FROM Products WHERE ?", [{ item_id: answer.Item }], function (err, data) {
            if (err) throw err;

            //Checks if sufficient quantity exists
            if (data[0].stock_quantity < ItemInt) {
                console.log("Insufficient quantity!\n");
                console.log("Choose another product\n");
                start();
            } else {

                //If quantity exists updates database
                var updateQty = data[0].stock_quantity - ItemInt;
                var totalPrice = data[0].price * ItemInt;
                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [updateQty, answer.Item], function (err, results) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("Thank you for your purchase.\n");
                        console.log("Your total cost is: $ " + totalPrice);

                        //Asks the buyer if they would like to continue
                        inquirer.prompt({
                            name: "buyMore",
                            type: "confirm",
                            message: "Do you want to purchase another product?",
                        }).then(function (answer) {
                            if (answer.buyMore === true) {
                                start();
                            } else {
                                console.log("Thank you come again");
                                connection.end();
                            }
                        });
                    }
                });
            }
        });
    });
};
