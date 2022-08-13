const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log(`Connected to database: ${process.env.DATABASE_URL}`));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log('Bowling-scores-api listening on port 3000');
});