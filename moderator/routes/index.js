const router = require("express").Router();
const axios = require("axios").default;

router.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("moderator service event =>", req.body);

  if (type === "COMMENT_CREATED") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    axios
      .post("http://localhost:8000/events", {
        type: "COMMENT_MODERATED",
        data: { ...data, status },
      })
      .catch(console.error);
  }

  res.send({ status: true });
});

module.exports = router;
