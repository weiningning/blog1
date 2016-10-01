var express=require('express');
var path=require('path');
var index=require('./routes/index');
var bodyParser=require('body-parser');

var app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
var user=require('./routes/user');
var article=require('./routes/article');
app.set('view engine','html');
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').__express);
app.use('/user',user);
app.use('/article',article);
app.use('/',index);
app.listen(9090);