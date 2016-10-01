var express = require('express');
var User = require('../db').User;
var router = express.Router();
router.get('/signup', function (req, res) {
    res.render('users/signup', {title: '注册'});
});
router.post('/signup', function (req, res) {
    var user = req.body;
    User.create(user, function (err, doc) {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/');
        }
    })
});
router.get('/signin', function (req, res) {
    res.render('users/signin', {title: '注册'});
});
router.get('/signout', function (req, res) {
    res.redirect('/')
});
module.exports = router;