const { response } = require("../utils/response");
const {
  validateCreatePostsInput,
} = require("../validators/posts/createPostValidator");

let posts = [];

exports.createPost = async (req, res) => {
  try {
    //  Checking validations
    const { errors, isValid } = validateCreatePostsInput(req.body);
    if (!isValid) {
      return res.status(400).json(response(400, "Bad Request", errors));
    }
    const { title, content, author } = req.body;
    const id = posts.length + 1; //  Assigning id based on array length
    const newPost = { id, title, content, author };
    posts.push(newPost);
    return res.status(201).json(response(201, "New post created", newPost));
  } catch (err) {
    return res.status(400).json(response(400, "Failed to create post"));
  }
};

exports.getPosts = async (req, res) => {
  return res.status(200).json(response(200, "", posts));
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === +id);
  if (!post) {
    return res.status(404).json(response(404, "Post not found"));
  }
  return res.status(200).json(response(200, "", post));
};
