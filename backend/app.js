const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const eventRouter = require("./routes/api/events")

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser to parse URL-encoded form data
app.use(express.json())
app.use(express.static("public"));

app.use("/api/auth", authRouter)
app.use("/api/event", eventRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message, })
})

module.exports = app