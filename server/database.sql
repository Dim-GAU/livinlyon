CREATE DATABASE livinlyon;

CREATE TABLE appartment (
    appartment_id SERIAL PRIMARY KEY,
    owner VARCHAR(255),
    rooms INTEGER,
    location VARCHAR(255),
    description VARCHAR(150),
);