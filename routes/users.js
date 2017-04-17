var express = require('express');
var router = express.Router();

//////////////////////////////////
//          /users            //
//////////////////////////////////

// MongoDB
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/courses', ['users']);

router.post('/register', function (req, res) {

  var data = req.body;

  var saveUser = {
    'firstName': data.firstName,
    'lastName': data.lastName,
    'password': data.password,
    'username': data.username
  };

  db.users.save(saveUser, function (err) {
    res.send({ status: true });
  });
});

router.post('/', function (req, res) {
  var data = req.body;

  var user = {
    'username': data.username,
    'password': data.password
  };

  if (!user.username || user.username == '') {
    res.status(400).json({ accessGranted: false });
  }

  if (!user.password || user.password == '') {
    res.status(400).json({ accessGranted: false });
  }

  db.users.findOne({ username: user.username }, function (err, dbuser) {
    if (err) throw err;
    if (user.password == dbuser.password) {
      res.status(200).json({ accessGranted: true });
    } else {
      res.status(401).json({ accessGranted: false });
    }
  });

});

module.exports = router;
