/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {};
/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("cookbooks", table => {
        table.bigIncrements("id").notNullable()
        table.string("title").notNullable()
        table.string("author").notNullable()
        table.text("description")
        table
            .bigInteger("categoryId")
            .unsigned()
            .index()
            .references("categories.id")
        table
            .bigInteger("userId")
            .unsigned()
            .index()
            .references("users.id")
        table
            .timestamp("createdAt")
            .notNullable()
            .defaultTo(knex.fn.now())
        table
            .timestamp("updatedAt")
            .notNullable()
            .defaultTo(knex.fn.now())
    })
    console.log("created cookbooks table")
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    console.log("dropped cookbooks table")
    return knex.schema.dropTableIfExists("cookbooks")
};