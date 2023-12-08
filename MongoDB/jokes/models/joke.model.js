const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [5, "Setup requires at least five characters."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required."],
        minlength: [2, "Punchline requires at least two characters."]
    }
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;