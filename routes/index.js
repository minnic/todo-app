var express = require('express'),
    bodyParser = require('body-parser');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/react/test', function(req, res) {
  res.render('react/test', {title: 'React test'});
});

router.get('/api/comment/list', function(req, res) {
  res.send([{
    author: 'Peter Hunt',
    text: 'This is one comment'
  }, {
    author: 'Jordan Walke',
    text: 'This is another comment'
  }]);
});

router.post('/api/comment/add', bodyParser.urlencoded({extended: false}), function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
