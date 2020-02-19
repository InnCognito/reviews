DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id int,
  room_id int,
  name text,
  date_posted timestamp,
  comment text,
  accuracy_rating tinyint,
  location_rating tinyint,
  check_in_rating tinyint,
  value_rating tinyint,
  cleanliness_rating tinyint,
  communication_rating tinyint,
  overall_rating tinyint,

  PRIMARY KEY(room_id, date_posted, id)
);

COPY reviews (id, room_id, name, date_posted, comment, accuracy_rating, location_rating, check_in_rating, value_rating, cleanliness_rating, communication_rating, overall_rating) FROM 'seedData.csv';
