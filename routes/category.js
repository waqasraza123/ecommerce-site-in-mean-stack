var express = require('express');
var router = express.Router();
var models  = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  models.category.all().then(category => {
    res.json(category);
  });
});
router.post('/create', function(req, res, next) {
  // you can also build, save and access the object with chaining:
  models.category.build({ cat_name: req.cat_name, cat_image: req.cat_image})
  .save()
  .then(anotherCategory => {
    res.send("Category is created");
  })
  .catch(error => {
    res.send(error);
  })
});
// Find by Category id:
router.get('/:id', function(req, res, next) {
  let record = models.category.findById(req.params.id).then((record) => {
    res.json(record);
  });
});
// Category deleted by id:
router.delete('/delete/:id', function(req, res, next) {
  let record = models.category.findById(req.params.id).then((record) => {
      record.destroy();
  });
});
// Category updated by id:
router.put('/update/:id', function(req, res, next) {
  models.category.findById(req.params.id).then((post) => {
    post.cat_name=req.cat_name;
    post.cat_image=req.cat_image;
  });
});

module.exports = router;