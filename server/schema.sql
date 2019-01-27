CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int,
  username varchar(500),
  text varchar(8000),
  roomname varchar(500)
);

CREATE TABLE rooms (
  id int,
  name varchar(500),
  messageIdFk int
);

CREATE TABLE users (
  id int,
  name varchar(500),
  messageIdFk int
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

