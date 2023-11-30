/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('appointment', function (table) {
    table.increments('id')
    table.string('title').notNullable()
    table.text('description')
    table.dateTime('start_time').notNullable()
    table.dateTime('end_time').notNullable()
    table.integer('user_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('appointment')
}
