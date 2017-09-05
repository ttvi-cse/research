var Task = require('../models/task');
var Tag = require('../models/tag');

module.exports = {
    create: async (req, res, next) => {
        var task = new Task({
            name: req.body.name,
            created: new Date()
        });
        task.save(function(err, data) {
            if (err) next(err);

            var tags = req.body.tags;

            if (tags && tags.length > 0) {
                for (var i = 0; i < req.body.tags.length; i++) {
                    var tag = new Tag({
                        name: req.body.tags[i],
                        task_id: task._id
                    });

                    tag.save(function(err) {
                        if (err) next(err);
                        console.log('tag saved');
                    })
                }
            }
            res.send('task created');
        })
    },
    listAll: async (req, res, next) => {
        Task.find({}, 'name created', function(err, data) {
            if (err) next(err);

            res.json(data);
        })
    },
    viewDetail: async (req, res, next) => {
        console.log('controller viewDetail called');
    }
}