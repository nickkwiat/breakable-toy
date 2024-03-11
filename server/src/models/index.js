// include all of your models here using CommonJS requires
const Category = require("./Category.js")
const Comment = require("./Comment.js")
const Cookbook = require("./Cookbook.js")
const Join_Cookbook_Tag = require("./Join_Cookbook_Tag.js")
const Review = require("./Review.js")
const Tag = require("./Tag.js")
const User = require("./User.js")


module.exports = { Category, Comment, Cookbook, Join_Cookbook_Tag, Review, Tag, User};
