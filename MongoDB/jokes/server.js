const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config")

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
