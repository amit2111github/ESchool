require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')

//My Routes
var authRoutes = require("./routes/auth")
var userRoutes = require("./routes/user")

const app = express()
const port = process.env.PORT || 8000


//DB Connection
mongoose
	.connect(process.env.DATABASE,{
		useNewUrlParser : true,
		useUnifiedTopology : true,
		useCreateIndex  : true
	})
	.then(() => {
		console.log("DB CONNECTED")
	})
	.catch(() => {
		console.log("DB NOT CONNECTED")
	})

//Middleware
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

//Routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)


//Listrning on PORT
app.listen(port, () => {
	console.log(`App is running on ${port}`)
})