const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(express.json());

app.listen(7002, () => {
  console.log("comments service started on port 7000");
});