const validator = require("validator");
const isEmpty = require("../isEmpty");

exports.validateCreatePostsInput = (data) => {
  const errors = [];
  if (typeof data.title === "undefined") data.title = "";
  if (typeof data.content === "undefined") data.content = "";
  if (typeof data.author === "undefined") data.author = "";

  if (validator.isEmpty(data.title)) {
    errors.push("Title is required");
  }
  if (validator.isEmpty(data.content)) {
    errors.push("Content is required");
  }
  if (validator.isEmpty(data.author)) {
    errors.push("Author is required");
  }

  return { errors, isValid: isEmpty(errors) };
};
