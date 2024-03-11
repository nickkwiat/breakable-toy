/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("comments", table => {
        table.bigIncrements("id").notNullable()
        table.string("content").notNullable()
        table.timestamp("postTime").notNullable()
        table
            .bigInteger("reviewId")
            .unsigned()
            .notNullable()
            .references("reviews.id")
        table
            .bigInteger("userId")
            .unsigned()
            .notNullable()
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
    return knex.schema.dropTableIfExists("comments")
};
