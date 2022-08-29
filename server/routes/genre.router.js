const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('in all genres GET');
  const query = `SELECT * FROM "genres";`;
  pool.query(query)
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(err => {
      console.error('All Genres GET', err)
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  console.log('in Active Movie Genres GET');
  // Add query to get active movie's genres
  const query = `SELECT "name" FROM "genres"
                JOIN "movies_genres"
                ON "genres".id = "movies_genres".genre_id
                JOIN "movies"
                ON "movies_genres".movie_id = "movies".id
                WHERE "movies".id = $1`
  const id = req.params.id;
  pool.query(query, [id])
    .then(result => {
      res.send(result.rows)
    }).catch(err => {
      console.error('Active Genres GET', err)
      res.sendStatus(500)
    })
});

module.exports = router;