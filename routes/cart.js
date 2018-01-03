var express = require('express');
var router = express.Router();
var models  = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  models.cart.all().then(cart => {
    if(cart) {
        res.json(cart);
    } else {
        res.send("No Record!");
    }
  });
});
router.post('/create', function(req, res, next) {
  // you can also build, save and access the object with chaining:
  models.cart.build({ user_id: req.user_id,product_id: req.product_id,quantity: req.quantity})
  .save()
  .then(anothercart => {
    res.send("cart is created");
  })
  .catch(error => {
    res.send(error);
  })
});
// Find by cart id:
router.get('/:id', function(req, res, next) {
  let record = models.cart.findById(req.params.id).then((record) => {
    res.json(record);
  });
});
// cart deleted by id:
router.delete('/delete/:id', function(req, res, next) {
  let record = models.cart.findById(req.params.id).then((record) => {
      record.destroy();
  });
});
// cart updated by id:
// router.put('/update/:id', function(req, res, next) {
//   models.cart.findById(req.params.id).then((post) => {
//     post.cat_name=req.cat_name;
//     post.cat_image=req.cat_image;
//   });
// });

module.exports = router;