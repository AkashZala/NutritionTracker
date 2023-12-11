const express = require('express');
const router = express.Router();
const { v4 } = require('uuid');

const {
    client,
    fetchFood
} = require('./db')

router.get('/food', async(req,res,next) => {
    try {
      res.send(await fetchFood());
    } catch (error) {
      next(error);
    }
  });

router.post('/food', async(req, res, next) => {
    try {
        const SQL = `
          INSERT into food(name, protein, carbohydrate, fat)
          VALUES($1, $2, $3, $4)
          RETURNING *
        `;
        const response = await client.query(SQL, [req.body.name, req.body.protein, req.body.carbohydrate, req.body.fat]);
        res.send(response.rows[0]);
      } catch (error) {
        next(error)
      }
});


module.exports = router
