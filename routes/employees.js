const express = require('express');
const router = express.Router();
const employees = require('../services/employees');
/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await employees.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting pemployees `, err.message);
    next(err);
  }
});
module.exports = router;