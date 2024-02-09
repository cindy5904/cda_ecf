CREATE DATABASE if not exists projects; 

USE projects;

CREATE TABLE task (
	id_task INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    descriptions TEXT, 
    priority VARCHAR(250),
    term DATE,
    status BOOLEAN NOT NULL
    );

CREATE TABLE project (
	id_project INT AUTO_INCREMENT PRIMARY KEY,
    id_task INT,
    name_project VARCHAR(100) NOT NULL,
    descriptions TEXT,
	FOREIGN KEY (id_task) REFERENCES task (id_task)
    ); 
    
CREATE TABLE user (
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    id_project INT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
	FOREIGN KEY (id_project) REFERENCES project (id_project)
    );     



ALTER TABLE task
MODIFY COLUMN status VARCHAR(20);

ALTER TABLE project
ADD COLUMN id_user INT,
ADD FOREIGN KEY (id_user) REFERENCES user (id_user);

SELECT * FROM project;