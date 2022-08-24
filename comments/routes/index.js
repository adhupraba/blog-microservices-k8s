const router = require("express").Router();
const { randomBytes } = require("crypto");

const commentsByPostId = {};

router.get("/posts/:postId/comments", (req, res) => {
  const { postId } = req.params;

  res.send(commentsByPostId[postId] || []);
});

router.post("/posts/:postId/comments", (req, res) => {
  const { postId } = req.params;

  const id = randomBytes(4).toString("hex");
  const { content } = req.body;

  if (!commentsByPostId[postId]) {
    commentsByPostId[postId] = [];
  }

  commentsByPostId[postId].push({ id, content });

  res.status(201).send(commentsByPostId[postId]);
});

module.exports = router;
