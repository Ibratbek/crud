const DoctorModel = require('../model/Doctors');

async function create(req, res) {
  const { fullName, workExperience, specialization, placeOfStudy } = req.body;
  const imageUrl = '';

  const doctor = new DoctorModel({
    imageUrl,
    fullName,
    workExperience,
    specialization,
    placeOfStudy,
  });

  await doctor.save();

  res.send('Created!');
}

async function getAll(req, res) {
  const doctors = await DoctorModel.find();

  res.send(doctors);
}

async function remove(req, res) {
  const { id } = req.params;

  await DoctorModel.findByIdAndDelete(id);

  res.send('Deleted');
}

module.exports = { create, getAll, remove };
