const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('in Active Movie Genres GET');
  // Add query to get genres of selected movie
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
      console.error('Genres GET', err)
      res.sendStatus(500)
    })
});

module.exports = router;