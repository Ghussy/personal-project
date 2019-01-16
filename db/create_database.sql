CREATE TABLE userz
(
    acc_id SERIAL PRIMARY KEY, 
    acc_email VARCHAR(180),
    acc_hash TEXT
);