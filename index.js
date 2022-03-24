const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const connection = require('./models/connection');

const api = require('./controllers/api');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/views/')));

app.use('/api', api);

app.listen(3000);