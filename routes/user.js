var express = require('express')
var router = express.Router()
var { isAdmin, isAuthenticated, isSignedIn} = require('../controllers/auth')
var {getUserById, getUser, getAllUsers} = require('../controllers/user')

router.param("userId", getUserById)

router.get("/user/:userId",isSignedIn, isAuthenticated, getUser)

router.get("/users", getAllUsers)

module.exports = router;