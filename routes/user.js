var express = require('express');
var router = express.Router();
var models  = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  models.User.all().then(user => {
    res.json(user);
  });
});
router.post('/create', function(req, res, next) {
  // you can also build, save and access the object with chaining:
  models.User.build({ firstName: req.first_name, lastName: req.last_name,email: req.email,password: req.password})
  .save()
  .then(anotheruser => {
    res.send("user is created");
  })
  .catch(error => {
    res.send(error);
  })
});
// Find by user id:
router.get('/:id', function(req, res, next) {
  let record = models.User.findById(req.params.id).then((record) => {
    res.json(record);
  });
});
// user deleted by id:
router.delete('/delete/:id', function(req, res, next) {
  let record = models.User.findById(req.params.id).then((record) => {
      record.destroy();
  });
});
// user updated by id:
router.put('/update/:id', function(req, res, next) {
  models.User.findById(req.params.id).then((post) => {
    post.firstName=req.first_name;
    post.lastName=req.last_name;
    post.email=req.email;
    post.password=req.password;
  });
});

module.exports = router;