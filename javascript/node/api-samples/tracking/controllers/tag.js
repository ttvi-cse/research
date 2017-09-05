var Tag = require('../models/tag');

module.exports = {
    listAll: (req, res, next) => {
        Tag.find({}, function(err, data) {
            if (err) next(err);

            res.json(data);
        })
    }
}