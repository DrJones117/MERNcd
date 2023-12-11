const { Schema, model } = require("mongoose")

const AuthorSchema = new Schema({
    name:{
        type: String,
        require: [true, "{PATH} is required"],
        minLength: [3, "Name should be at least 3 characters long."]
    }
}, {timestamps: true})

const Author = model("Author", AuthorSchema);
module.exports = Author;