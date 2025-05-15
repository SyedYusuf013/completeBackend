// including express module and initialising an app
const express = require("express"); //include express module in my js file
const app = express(); // creating app

// variable that store the port number
const port = 3000;

app.get("/", (req, res) => {
  console.log("get request aayi h")
});

// request -> get / put / post / delete
// path -> /, /about, /article, /blog

// start your app or server
app.listen(port, () => {
  console.log("app start ho chuki h");
});
