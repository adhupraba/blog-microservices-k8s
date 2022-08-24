const router = require("express").Router();
const { randomBytes } = require("crypto");
const axios = require("axios").default;

const posts = {};

router.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("post service event =>", req.body);
  res.send({ status: true });
});

router.get("/posts", (req, res) => {
  res.send(posts);
});

router.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = { id, title };

  axios
    .post("http://localhost:8000/events", {
      type: "POST_CREATED",
      data: { id, title },
    })
    .catch(console.error);

  res.status(201).send(posts[id]);
});

module.exports = router;
