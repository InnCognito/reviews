DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id int PRIMARY KEY,
  room_id int NOT NULL,
  name varchar(20) NOT NULL,
  date_posted text,
  comment text,
  accuracy_rating numeric(2,1) DEFAULT 2.5,
  location_rating numeric(2,1) DEFAULT 2.5,
  check_in_rating numeric(2,1) DEFAULT 2.5,
  value_rating numeric(2,1) DEFAULT 2.5,
  cleanliness_rating numeric(2,1) DEFAULT 2.5,
  communication_rating numeric(2,1) DEFAULT 2.5,
  overall_rating numeric(2,1) DEFAULT 2.5
);

\COPY reviews FROM 'seedData.csv' WITH (FORMAT CSV);