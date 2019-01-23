INSERT INTO playlist
(
    user_id, playlist_name
)
VALUES
(
    ${userId}, ${playlistName}
)
RETURNING *; 
