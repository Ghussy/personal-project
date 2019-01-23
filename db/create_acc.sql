INSERT INTO primary_user
(
    username, password
)
VALUES
(
    ${username}, ${password}
)
RETURNING *; 
