const User = require('../model/User')

exports.user = (req,res) => {
    console.log(User.userInfo());
    res.render('user', {userInfo:User.userInfo()});
};