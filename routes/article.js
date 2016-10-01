var express=require('express');
var router=express.Router();
router.get('/add',function (req, res) {
    res.send('写文章')
});
router.get('/delete',function (req, res) {
    res.send('删除文章')
});
router.get('/query',function (req, res) {
    res.send('查询文章')
});
module.exports=router;