const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/products', ProductController.getProducts);
    app.post('/api/products', ProductController.createProduct);
}

