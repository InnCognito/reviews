const faker = require('faker');

// create initial seed response data via faker to avoid having to constantly call new random
// calls or new faker calls

let review_id = 0;
const ratings = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
let pseudoRng = 1;

const fastRng = (max) => ((review_id % max * 3 * pseudoRng++) % max)

const genReviewObject = () => {
  let review = {};

  review.id = review_id;
  review_id += 1;

  review.room_id = Math.floor(Math.random() * 10000000);

  review.name = faker.name.firstName();

  review.date = faker.date.recent(90);

  review.comment = faker.lorem.paragraph();

  review.accuracy_rating = ratings[fastRng(ratings.length)];
  review.location_rating = ratings[fastRng(ratings.length)];
  review.check_in_rating = ratings[fastRng(ratings.length)];
  review.value_rating = ratings[fastRng(ratings.length)];
  review.cleanliness_rating = ratings[fastRng(ratings.length)];
  review.communication_rating = ratings[fastRng(ratings.length)];

  const sum = 
    review.accuracy_rating
    + review.location_rating 
    + review.check_in_rating 
    + review.value_rating 
    + review.cleanliness_rating 
    + review.communication_rating;

  review.overall_rating = Math.round(sum / 3) / 2;

  return review;
};

module.exports = { genReviewObject };
