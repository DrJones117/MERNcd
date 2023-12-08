const Joke = require("../models/joke.model")

const joke = {
    createJoke: (req, res) => {
        const newJoke = req.body;
        console.log(req.body)
        Joke.create(newJoke, {new: true, runValidators: true})
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    findJokes : (req, res) => {
        Joke.find()
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
        Joke.find({_id: req.params.id})
            .then((data) => {
                console.log({joke: data});
                res.json({joke: data})
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    updateJoke : (req, res) => {
        Joke.updateOne({_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true})
            .then((data) => {
                console.log({data: data});
                res.json({joke: data});
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    deleteJoke : (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then((data) => {
                console.log({data: result});
                res.json({data: data});
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    }
}

module.exports = joke;