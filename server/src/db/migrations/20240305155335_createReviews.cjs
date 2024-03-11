/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("reviews", table => {
        table.bigIncrements("id").notNullable()
        table.string("content").notNullable()
        table.integer("rating").notNullable()
        table.timestamp("postTime")
        table
            .bigInteger("cookbookId")
            .unsigned()
            .notNullable()
            .references("cookbooks.id")
        table
            .bigInteger("userId")
            .notNullable()
            .unsigned()
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
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("reviews")
};
