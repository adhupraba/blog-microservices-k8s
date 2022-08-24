const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.listen(7001, () => {
  console.log("posts service started on port 7001");
});
