const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use("/tasks", require("./routes/taskRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
