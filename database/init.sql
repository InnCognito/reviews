DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL,
  room_id INT NOT NULL,
  name VARCHAR(20) NOT NULL,
  date_posted TIMESTAMP,
  comment TEXT,
  accuracy_rating SMALLINT,
  location_rating SMALLINT,
  check_in_rating SMALLINT,
  value_rating SMALLINT,
  cleanliness_rating SMALLINT,
  communication_rating SMALLINT,
  overall_rating SMALLINT,
  PRIMARY KEY (room_id, id)
);

\COPY reviews FROM 'seedData.csv' WITH (FORMAT CSV);