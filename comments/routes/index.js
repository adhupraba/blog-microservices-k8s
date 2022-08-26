const router = require("express").Router();
const axios = require("axios").default;
const { randomBytes } = require("crypto");

const commentsByPostId = {};

router.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("comments service event =>", req.body);

  if (type === "COMMENT_MODERATED") {
    const { postId, ...comment } = data;

    console.log(commentsByPostId[postId]);
    const commentIdx = commentsByPostId[postId].findIndex((cmnt) => cmnt.id === comment.id);
    commentsByPostId[postId][commentIdx] = comment;

    axios
      .post("http://eventbus-svc:8000/events", {
        type: "COMMENT_UPDATED",
        data,
      })
      .catch(console.error);
  }

  res.send({ status: true });
});

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

  const newComment = { id, content, status: "pending" };
  commentsByPostId[postId].push(newComment);

  console.log(commentsByPostId[postId]);

  axios
    .post("http://eventbus-svc:8000/events", {
      type: "COMMENT_CREATED",
      data: { ...newComment, postId },
    })
    .catch(console.error);

  res.status(201).send(commentsByPostId[postId]);
});

module.exports = router;
