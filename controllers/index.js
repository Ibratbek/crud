const DoctorModel = require('../model/Doctors');
const { v4: uuid } = require('uuid');
const path = require('path');

async function create(req, res) {
  const { fullName, workExperience, specialization, placeOfStudy } = req.body;
  const image = '';

  const doctor = new DoctorModel({
    image,
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

async function setAvatar(req, res) {
  const { id } = req.body;
  const file = req.files.file;

  if (!file) {
    return res.send('File empty');
  }

  const name = uuid();
  const fileExtention = file.name.split('.')[1];

  const fileName = `${name}.${fileExtention}`;

  await DoctorModel.findOneAndUpdate({ id, image: fileName });

  file.mv(`uploads/${fileName}`, (err) => {
    if (err) {
      return res.send(err);
    } else {
      return res.status(200).send('Image is saved!');
    }
  });
}

async function getAvatar(req, res) {
  const id = req.params;
  const fileUrl = path.resolve('uploads');

  const user = await DoctorModel.findOne(id);

  const image = path.join(fileUrl, user.image);

  res.status(200).sendFile(image);
}

module.exports = { create, getAll, remove, setAvatar, getAvatar };
