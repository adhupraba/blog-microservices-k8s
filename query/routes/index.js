const router = require("express").Router();

const posts = {};

const handleEvent = ({ type, data }) => {
  if (type === "POST_CREATED") {
    posts[data.id] = { ...data, comments: [] };
  } else if (type === "COMMENT_CREATED") {
    const { postId, ...comment } = data;
    posts[postId].comments.push(comment);
  } else if (type === "COMMENT_UPDATED") {
    const { postId, ...comment } = data;
    const commentIdx = posts[data.postId].comments.findIndex((cmnt) => cmnt.id === comment.id);
    posts[data.postId].comments[commentIdx] = comment;
  }
};

router.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("query service event =>", req.body);

  handleEvent({ type, data });

  res.send({ status: true });
});

router.get("/posts", (req, res) => {
  res.send(posts);
});

module.exports = { handleEvent, router };
