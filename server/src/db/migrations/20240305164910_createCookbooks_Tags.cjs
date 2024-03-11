/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("join_cookbooks_tags", table => {
        table
            .bigInteger("cookbookId")
            .unsigned()
            .notNullable()
            .references("cookbooks.id")
        table
            .bigInteger("tagId")
            .unsigned()
            .notNullable()
            .references("tags.id")
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
    return knex.schema.dropTableIfExists("join_cookbooks_tags")
};
