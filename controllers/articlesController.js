const db = require('../models');

//Define methods for the articleControllers which will run mongoose queries

module.exports = {
    create: function (req, res) {
        db.Article 
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
};