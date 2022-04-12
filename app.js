const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
require('./model/index');

const Routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.use(Routes);

app.listen(5050, () => console.log(`Server run on port: 5050`));
