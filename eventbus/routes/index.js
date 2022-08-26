const router = require("express").Router();
const axios = require("axios").default;

const events = [];

router.post("/events", (req, res) => {
  const event = req.body;

  console.log("eventbus event =>", event);

  events.push(event);

  // post
  axios.post("http://posts-svc:7001/events", event).catch(console.error);
  // comment
  axios.post("http://comments-svc:7002/events", event).catch(console.error);
  // query
  axios.post("http://query-svc:7003/events", event).catch(console.error);
  // moderator
  axios.post("http://moderator-svc:7004/events", event).catch(console.error);

  res.send({ status: true });
});

router.get("/events", (req, res) => {
  res.send(events);
});

module.exports = router;
