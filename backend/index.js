const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
require("./Models/db");

const PORT = process.env.PORT || 5174;

app.use(bodyParser.json());
app.use(
  cors({
    origin: `${process.env.FRONTEND_URL || "http://localhost:5173"}`,
    credentials: true,
  })
);
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
