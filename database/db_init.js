const Pool = require('pg-pool');

const config = {
  user: 'chartreuse',
  password: '',
  host: '127.0.0.1',
  port: 5432,
  database: 'inncognito',
};

const pool = new Pool(config);

const read = (target = 0) => {
  return new Promise ((res, rej) => {
    console.log('attempting read of entry at', target);
    const query = {
      text: 'SELECT * FROM reviews WHERE room_id=$1 LIMIT 5',
      values: [target['room_id']],
    };
    pool.connect().then((client) => {
      console.log('attempting query');
      client.query(query)
        .then(response => {
          console.log('query success');
          client.release();
          res(response.rows[0]);
      })
        .catch(e => {
          console.log('query failure');
          console.log('query error', e.message, e.stack);
          client.release();
          rej();
      });
    });
  });
};

module.exports = { read };