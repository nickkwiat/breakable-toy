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
        table.string("description")
        table.string("publicationDate")
        table
            .bigInteger("categoryId")
            .unsigned()
            .index()
            .references("categories.id")
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
    return knex.schema.dropTableIfExists("cookbooks")
};