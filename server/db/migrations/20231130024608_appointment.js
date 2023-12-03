/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('appointment', function (table) {
    table.increments('id')
    table.string('title').notNullable()
    table.text('description')
    table.date('appointment_date').notNullable()
    table.time('start_time').notNullable()
    table.time('end_time').notNullable()
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
