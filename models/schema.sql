DROP DATABASE IF EXISTS limt_db;
CREATE DATABASE limt_db;

USE limt_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    password VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(100),
    base_price DECIMAL(10,2),
    PRIMARY KEY(id)
);

CREATE TABLE customization (
	id INT NOT NULL AUTO_INCREMENT,
    tag VARCHAR(100),
    customization VARCHAR(100),
    price_addition DECIMAL(10,2),
    PRIMARY KEY(id)
);

CREATE TABLE faq (
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(100),
    question VARCHAR(100),
    comment VARCHAR(100),
    PRIMARY KEY(id)
);

SELECT * FROM users;
SELECT * FROM products, faq;