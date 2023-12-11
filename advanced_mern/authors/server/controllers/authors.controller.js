const Author = require("../models/author.model");

// create one author
module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            console.log(newAuthor)
            res.json(newAuthor)
        })
        .catch(err =>  {
            console.log(err)
            res.status(400).json(err)
        })
}

// find all authors
module.exports.findAll = (req, res) => {
    Author.find()
        .then(authors => {
            console.log(authors)
            res.json(authors)
        })
        .catch(err =>  {
            console.log(err)
            res.status(400).json(err)
        })
};

// find one author
module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => {
            console.log(author)
            res.json(author)
        })
        .catch(err =>  {
            console.log(err)
            res.status(400).json(err)
        })
};

// find one author
module.exports.update = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => {
            console.log(updatedAuthor)
            res.json(updatedAuthor)
        })
        .catch(err =>  {
            console.log(err)
            res.status(400).json(err)
        })
}

// delete one author
module.exports.delete = (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
        .then(deletedAuthor => {
            console.log(deletedAuthor)
            res.json(deletedAuthor)
        })
        .catch(err =>  {
            console.log(err)
            res.status(400).json(err)
        })
}
