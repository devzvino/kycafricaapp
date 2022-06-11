const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//?middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//*Routes
const usersRouter = require("./routes/users");

const api = process.env.API_URL;

// api routes
app.use(`${api}/users`, usersRouter);

// Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

// servier listien port
app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
