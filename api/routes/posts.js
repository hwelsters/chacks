const router = require("express").Router();
const Post = require("../models/Post");
const verify = require("../verifyToken");

const Sentiment = require("sentiment");
const sentiment = new Sentiment();

const analyzeSentiment = (text) => {
  const res = sentiment.analyze(text);

  const score = res.score;
  const length = res.negative.length + res.positive.length;

  if (length === 0) return 4;
  return Math.round(Math.min(Math.max(score / length, -4), 4)) + 4;
};

// CREATE POST
router.post("/create", async (req, res) => {
  console.log(req);
  console.log("CREATE POST");
  const newPost = new Post({
    userId: req.body.userId,
    username: req.body.username,
    pickup: req.body.pickup,
    dropoff: req.body.dropoff,
    text: req.body.text,
  });
  try {
    const post = await newPost.save();
    console.log(post);
    res.status(200).json("Post created");
  } catch (err) {
    console.log(err);
    res.status(500).json("Failed to create post");
  }
});

// GET MOST RECENT POSTS
router.get("/recent", async (req, res) => {
  console.log("GET RECENT");
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER POSTS
router.post("/getus", async (req, res) => {
  console.log("GET POSTS");
  console.log(req.body);
  try {
    const posts = await Post.find({
      pickup: req.body.pickup,
      dropoff: req.body.dropoff,
    })
      .sort({
        createdAt: -1,
      })
      .limit(10);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/requests", async (req, res) => {
  console.log(req.params.id);
  try {
    const posts = await await Post.find({ pickup: null, dropoff: null })
      .limit(10)
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
