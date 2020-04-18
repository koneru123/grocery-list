/*  Execute this file from the command line by typing:
 *    mysql -u student -p < schema.sql
 *  to create the database and the tables.*/
 DROP DATABASE IF EXISTS grocery_list;

 CREATE DATABASE grocery_list;

 USE grocery_list;

 CREATE TABLE groceries(
   id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
   item VARCHAR(255),
   quantity int
 );

INSERT INTO groceries(item, quantity) VALUES ("PIZZA", 1);
INSERT INTO groceries(item, quantity) VALUES ("Yogurt", 6);
INSERT INTO groceries(item, quantity) VALUES ("Milk", 10);
INSERT INTO groceries(item, quantity) VALUES ("Bread", 15);
INSERT INTO groceries(item, quantity) VALUES ("Tangerines", 20);
INSERT INTO groceries(item, quantity) VALUES ("Mangoes", 40);

