require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require('./route/contactRoute')

const app = express();

//creating the middleware
app.use(express.json())
app.use(cors())

app.use("/", contactRoute);

if(process.env.NODE_ENV)

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Server listening to port 5000 only`));