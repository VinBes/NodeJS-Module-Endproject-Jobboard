/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("finder_customfield", function (table) {
    table.increments("customfield_id").notNullable().primary();
    table.integer("finder_id");
    table.foreign("finder_id").references("finder.finder_id");
    table.string("customfield_title");
    table.string("customfield_content");
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("finder_customfield");
};
