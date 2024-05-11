/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "username"],
      properties: {
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        username: { type: "string", minLength: 1, maxLength: 255 },
        cryptedPassword: { type: "string" },
      },
    };
  }

  $beforeInsert() {
    return this.$checkUniqueness("email");
  }

  $beforeUpdate() {
    return this.$checkUniqueness("email");
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }

  static get relationMappings() {
    const { Review, Cookbook } = require("./index.js");

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "users.id",
          to: "reviews.userId",
        },
      },
      cookbooks: {
        relation: Model.HasManyRelation,
        modelClass: Cookbook,
        join: {
          from: "users.id",
          to: "cookbooks.userId",
        },
      },
    };
  }
}

module.exports = User;
