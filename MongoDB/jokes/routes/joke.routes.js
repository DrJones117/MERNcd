const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokeController.findJokes);
    app.get("/api/jokes/:id", jokeController.findJoke);
    app.post("/api/jokes/", jokeController.createJoke);
    app.patch("/api/jokes/:id", jokeController.updateJoke);
    app.delete("/api/jokes/:id", jokeController.deleteJoke);
}