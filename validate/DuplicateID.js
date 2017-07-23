const Book = require('../Book');

module.exports = function (req, res, next) {
    let book = new Book();

    if(req.params.id === book.map(book.id)){
        return res.json({message : 'id duplicate !'});
    }
    next();
};

