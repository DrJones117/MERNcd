const { Product } = require('../models/product.model')


const product = {
    createProduct: (req, res) => {
        const { title, price, description } = req.body;
        Product.create({
            title,
            price,
            description
        })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    getProducts: (req, res) => {
            Product.find()
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err)
            })
    }
}


module.exports = product;