/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('costumers',function(table){
        table.increments()
        table.string('full_name')
        table.string('address')
        table.date('born_date')
        table.string('phone_number')
        table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
