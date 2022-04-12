const express = require('express');

const router = express.Router();

const DoctorController = require('../controllers/index');

router
  .route('/doctors')
  .post((req, res) => DoctorController.create(req, res))
  .get((req, res) => DoctorController.getAll(req, res));

router
  .route('/doctors/:id')
  .delete((req, res) => DoctorController.remove(req, res));

module.exports = router;
