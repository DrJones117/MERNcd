const { Product } = require('../models/product.model')


const product = {
    createProduct: (req, res) => {
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description
        })
            .then(product => {
                console.log(product)
                res.json(product)
            })
            .catch(err => res.json(err))
    },
    getAllProducts: (req, res) => {
            Product.find({})
            .then(products => {
                res.json(products);
            })
            .catch(err => {
                console.log(err);
                res.json(err)
            })
    },
    getOneProduct: (req, res) => {
        Product.findById({_id: req.params.id})
            .then(product => {
                res.json(product);
            })
            .catch(err => res.json(err))
    }
}


module.exports = product;