CREATE DATABASE IF NOT EXISTS db_ejemplo

/* se crea luego se usa */
USE  db_ejemplo;

CREATE TABLE IF NOT EXISTS person(

    id int(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    dni INT(8) NOT NULL,
    enamil VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)


)
insert into person values 
(1, "rama","cabri",30388969, "cabriramiro@gmail.com")