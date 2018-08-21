DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("1", "Xbox", "Electronics", 350.00, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2", "Gone WIth the Wind", "Books", 15.50, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3", "Tide", "Household", 12.99, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4", "UHD Television", "Electronics", 1299.89, 35);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5", "Paper Towels", "Household", 8.99, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("6", "Jacket", "Clothing", 49.90, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("7", "Vitamins", "Health", 19.99, 75;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("8", "Shoes", "Clothing", 59.50, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("9", "Toothbrush Pack", "Health", 8.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("10", "Computer Paper", "Office", 14.95, 220);
