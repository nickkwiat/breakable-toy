// include all of your models here using CommonJS requires
const User = require("./User.js");
const Category = require("./Category.js")
const Cookbook = require("./Cookbook.js")

module.exports = { Category, Cookbook, User };
