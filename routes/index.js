var express = require("express");
var router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
} = require("../controllers/PostController");

// Create new post
router.post("/posts", createPost);

// Get all posts
router.get("/posts", getPosts);

// Get posts by id
router.get("/posts/:id", getPostById);

module.exports = router;
