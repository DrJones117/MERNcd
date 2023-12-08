const Joke = require("../models/joke.model")

const joke = {
    createJoke: (req, res) => {
        const newJoke = req.body;
        Joke.save(newJoke)
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    findJoke : (req, res) => {
        Joke.find()
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    }
}

module.exports = joke;