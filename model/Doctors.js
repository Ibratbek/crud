const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const DoctorSchema = new Schema({
  image: String,
  fullName: String,
  workExperience: String,
  specialization: String,
  placeOfStudy: String,
});

module.exports = mongoose.model('Doctor', DoctorSchema);
