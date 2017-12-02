// The models need to be brought in order to use Mongoose operations (database
// operations)
const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.List
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.List
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.List
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.List
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUpdate: function(req, res){
    db.List
      .where('list',req.params.list)
      .where('users').all([req.params.users])
      .select("list _id")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      }
};