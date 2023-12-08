const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokeController.findJoke);
    app.get("/api/jokes/:id", jokeController.findJoke);
}