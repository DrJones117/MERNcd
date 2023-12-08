const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokeRouter = require("./routes/joke.routes");
jokeRouter(app);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
