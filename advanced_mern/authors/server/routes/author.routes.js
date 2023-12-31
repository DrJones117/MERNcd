const AuthorController = require("../controllers/authors.controller")

module.exports = app => {
    app.get('/api/authors', AuthorController.findAll);
    app.get("/api/authors/:id", AuthorController.findOne);
    app.post("/api/authors", AuthorController.create);
    app.patch("/api/authors/:id", AuthorController.update);
    app.delete("/api/authors/:id", AuthorController.delete);
}