const User = require("../models/user")

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                error : "NO USER FOUND"
            })
        }
        req.profile = user
        next()
    })
}

exports.getUser = (req, res) => {
    req.profile.salt = undefined
    req.profile.encry_password = undefined
    req.profile.createdAt = undefined
    req.profile.updatedAt = undefined
    return res.json(req.profile)
}

exports.getAllUsers = (req, res) => {
    User.find({name : "hhh"}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
    })
}