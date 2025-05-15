// import Express and db.js file:
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const app = express();
const port = process.env.PORT;

// Load env
dotenv.config();

//body parser
app.use(express.json());

//connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`);
});
