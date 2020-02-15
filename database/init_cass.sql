DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id int,
  room_id int,
  name text,
  date_posted text,
  comment text,
  accuracy_rating decimal,
  location_rating decimal,
  check_in_rating decimal,
  value_rating decimal,
  cleanliness_rating decimal,
  communication_rating decimal,
  overall_rating decimal,

  PRIMARY KEY(room_id, id)
);

COPY reviews (id, room_id, name, date_posted, comment, accuracy_rating, location_rating, check_in_rating, value_rating, cleanliness_rating, communication_rating, overall_rating) FROM 'seedData.csv';
