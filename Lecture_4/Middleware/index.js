const express = require("express");
const app = express();
const port = 3000;

/// loading middleware into the app
app.use(express.json());

// middleware - logging, auth, validation

// creation of a middleware
// const loggingMiddleware = function (req, res, next) {
//   console.log("logging kr rha hoon");
//   next();
// };
// // loading the middleware into application
// app.use(loggingMiddleware);

// const autMiddleware = function (req, res, next) {
//   console.log("auth kr rha hoon");
// //   res.send("ab thak chuke h ye kadam chal ghar chale mere humdum")
//   next();
// };
// app.use(autMiddleware);

// const validationMiddleware = function (req, res, next) {
//   console.log("validation kr rha hon");
//   next();
// };
// app.use(validationMiddleware);

const route = require('./routes/route')
//mounting the routes
app.use('/api', route)


app.get("/", (req, res) => {
  console.log("main router handler hu");
  console.log(req.body);
  res.send("Hello Syed Sir!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
