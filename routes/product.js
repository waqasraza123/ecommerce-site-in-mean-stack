var express = require('express');
var router = express.Router();
var models  = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  models.Product.all().then(product => {
    res.json(product);
  });
});
router.post('/create', function(req, res, next) {
  // you can also build, save and access the object with chaining:
  models.Product.build({ p_name: req.p_name, p_dec: req.p_dec, p_price: req.p_price })
  .save()
  .then(anotherTask => {
    res.send("Product is created");
  })
  .catch(error => {
    res.send(error);
  })
});
// Find by product id:
router.get('/:id', function(req, res, next) {
  let record = models.Product.findById(req.params.id).then((record) => {
    res.json(record);
  });
});
// product deleted by id:
router.delete('/delete/:id', function(req, res, next) {
  let record = models.Product.findById(req.params.id).then((record) => {
      record.destroy();
  });
});
// product updated by id:
router.put('/update/:id', function(req, res, next) {
  models.Product.findById(req.params.id).then((post) => {
    post.p_name=req.p_name;
    post.p_dec=req.p_dec;
    post.p_price=req.p_price;
  });
});

module.exports = router;