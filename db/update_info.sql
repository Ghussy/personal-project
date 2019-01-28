UPDATE primary_user
SET first_name=${firstName}, last_name=${lastName},
bio=${bio},
profile_pic=${profile_pic},
birthday='12/11/1996', location='Salt Lake, utah', email=${email},
banner_pic=${banner_url}
WHERE id = ${Id};
