/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("reviews", table => {
        table.bigIncrements("id").notNullable()
        table.string("title").notNullable()
        table.string("content").notNullable()
        table.integer("rating").notNullable()
        table
            .bigInteger("userId")
            .unsigned()
            .index()
            .references("users.id")
        table
            .bigInteger("cookbookId")
            .unsigned()
            .index()
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
