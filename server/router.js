const express = require('express');
const router = express.Router();
const axios = require('axios');
const dbPool = require('./db');

router.get('/', async (req, res) => {
  const rows = await dbPool.query('SELECT * FROM spaceData');
  res.status(200);
  res.send({
      result: JSON.stringify(rows)
  });
});

router.get('/capsules', async (req, res) => {
  axios.get('https://api.spacexdata.com/v3/capsules')
  .then(resp => {
    res.send(resp.data);
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/landpads', async (req, res) => {
  axios.get('https://api.spacexdata.com/v3/landpads')
  .then(resp => {
    res.send(JSON.stringify(resp.data, null, 2));
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/landpads/:id', async (req, res) => {
  axios.get(`https://api.spacexdata.com/v3/landpads/${req.params.id}`)
  .then(resp => {
    const result = {
      id: resp.data.id,
      full_name: resp.data.full_name,
      status: resp.data.status,
      location: resp.data.location
    }

    res.send(JSON.stringify(result));
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;