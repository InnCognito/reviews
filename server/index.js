const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require(path.resolve(__dirname, '..', 'database', 'db_init.js'));
const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:room_id', (req, res) => {
  const target = {room_id: req.params.room_id};
  db.read(target)
    .then((data) => res.status(200).send([{ reviews: data, room_id: target }]))
    .catch((err) => res.status(500).send('ERROR RETRIEVING DATA'));
});

app.listen(PORT, ()=>{
  console.log("Server is now listening on port:", PORT);
  console.log(`Visit website at http://localhost:${PORT}/:id=1`);
});

// Desired Data Shape on front end
// [0] => { review: [<reviews>], room_id: <room_id> }