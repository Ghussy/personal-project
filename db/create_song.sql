INSERT INTO music_list
(
    track_id, user_id, artist_name, collection_name, track_name, artwork_url, genre, playlist_id, preview_url
)
VALUES
(
    ${trackId}, ${userId}, ${artistName}, ${collectionName}, ${trackName}, ${artworkUrl100}, ${genre}, ${playlistId}, ${previewUrl}
)
RETURNING *; 
