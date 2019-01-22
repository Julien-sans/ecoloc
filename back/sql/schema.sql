create table activite(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    date_publication DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    -- association VARCHAR(30),
    description VARCHAR (250),
    prix VARCHAR (50),
    lieu VARCHAR (200),
    infos VARCHAR (150),
    association_id INTEGER NOT NULL
);

create table association(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR (255),
    password VARCHAR (25),
    association VARCHAR(150),
    description VARCHAR (200)   
);

ALTER TABLE activite ADD CONSTRAINT fk_association_id FOREIGN KEY (association_id) REFERENCES association(id);