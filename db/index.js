var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog1');
var UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
exports.User=mongoose.model('User',UserSchema);