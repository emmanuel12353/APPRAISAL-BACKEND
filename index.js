
const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const connectDB = require('./Data/config');
const staffRoute = require('./Routes/staff');

const supervisorRoute = require('./Routes/supervisor')
const bodyParser = require('body-parser');
const StaffRoute = require('./Routes/staff');
const DseRoute = require('./Routes/dse');



const app = express();
dotenv.config();


connectDB();
const port = process.env.PORT



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.use(bodyParser());
app.use(staffRoute)
app.use(supervisorRoute)
app.use(StaffRoute)
app.use(DseRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
