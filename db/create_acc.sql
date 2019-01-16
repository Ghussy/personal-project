INSERT INTO userz
(
    username, password
)
VALUES
(
    ${username}, ${password}
)
RETURNING *; 
