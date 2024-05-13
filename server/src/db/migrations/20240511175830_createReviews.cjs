/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("reviews", table => {
        table.bigIncrements("id").notNullable()
        table.string("title", 1000).notNullable()
        table.text("content", 3000).notNullable()
        table
            .bigInteger("userId")
            .unsigned()
            .index()
            .references("users.id")
        table
            .bigInteger("cookbookId")
            .unsigned()
            .index()
            .notNullable()
            .references("cookbooks.id")
        table
            .timestamp("createdAt")
            .notNullable()
            .defaultTo(knex.fn.now())
        table
            .timestamp("updatedAt")
            .notNullable()
            .defaultTo(knex.fn.now())
    })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("reviews")
};
