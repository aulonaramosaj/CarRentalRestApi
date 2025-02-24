require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');

app.use(authRoutes);
app.use(carRoutes);

app.listen(process.env.PORT, () => console.log('Server Started'))
