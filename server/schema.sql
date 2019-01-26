CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  Id int,
  User varchar(500),
  Text varchar(8000),
  Room varchar(500)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE Rooms (
  /* Describe your table here.*/
  Id int,
  Name varchar(500),
  MessageIdFk int
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

