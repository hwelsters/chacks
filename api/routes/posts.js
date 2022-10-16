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
router.post("/create", verify, async (req, res) => {
  if (req.text === "") {
    res.status.apply(400).json("Empty text");
    return;
  }

  console.log("CREATE POST");
  const sentiment = analyzeSentiment(req.body.text);
  if (req.user && req.user.id === req.body.id) {
    const newPost = new Post({
      userId: req.body.id,
      username: req.body.username,
      img: req.body.img,
      text: req.body.text,
      likes: 0,
      emotion: sentiment,
    });
    try {
      const post = await newPost.save();
      console.log(post);
      res.status(200).json("Post created");
    } catch (err) {
      res.status(500).json("Failed to create post");
    }
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
router.get("/userPosts/:username", async (req, res) => {
  console.log("GET USER");
  try {
    const posts = await Post.find({ username: req.params.username })
      .sort({
        createdAt: -1,
      })
      .limit(10);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/emotions/:id", async (req, res) => {
  console.log("GET EMOTIONS");
  console.log(req.params.id);
  try {
    const posts = await await Post.find({ emotion: req.params.id })
      .limit(10)
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
