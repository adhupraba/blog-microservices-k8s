const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const { handleEvent, router } = require("./routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.listen(7003, async () => {
  try {
    console.log("query service started on port 7003");

    const { data } = await axios.get("http://localhost:8000/events");

    for (let event of data) {
      console.log("processing event =>", event.type);
      handleEvent(event);
    }
  } catch (err) {
    console.error(err);
  }
});
