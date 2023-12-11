const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT;

// config
require('./config/mongoose.config')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
require('./routes/author.routes')(app);

// listener
app.listen(port, () => console.log(`Listening on port: ${port}`) );