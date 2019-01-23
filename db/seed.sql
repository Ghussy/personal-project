CREATE TABLE primary_user (
id SERIAL PRIMARY KEY,
username VARCHAR(180),
password text,
first_name Varchar(100),
last_name Varchar(100),
bio Varchar(1000),
profile_pic Varchar(1000),
birthday Varchar(40),
Location Varchar(60),
email Varchar(100),
banner_pic Varchar(1000)
)

CREATE TABLE playlist (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES primary_user(id),
playlist_name varchar(100)
)

CREATE TABLE music_list (
id SERIAL PRIMARY KEY,
track_id integer,
user_id INTEGER REFERENCES primary_user(id),
artist_name VARCHAR(100),
collection_name VARCHAR(100),
track_name VARCHAR(200),
artwork_url VARCHAR(1000),
genre VARCHAR(100),
playlist_id integer REFERENCES playlist(id)
)

CREATE TABLE genres (
id SERIAL PRIMARY KEY,
userid INTEGER REFERENCES primary_user(id),
genre varchar(150)
)