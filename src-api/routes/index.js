var express = require('express');
var router = express.Router();
const Mongo = require('mongodb-curd');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//渲染主页面数据
router.get('/api/list', function(req, res, next) {
    Mongo.find('zhoukao', 'list', function(result) {
        if (result) {
            res.send({ code: 1, data: result })

        } else {
            res.send({ code: 0, msg: 'error' })
        }
    })
});
router.post('/api/list', function(req, res, next) {
    let { id } = req.body;
    Mongo.find('zhoukao', 'list', function(result) {
        if (result) {
            res.send({ code: 1, data: result })

        } else {
            res.send({ code: 0, msg: 'error' })
        }
    })
});
module.exports = router;