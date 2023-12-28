/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('timeslot', function (table) {
    table.increments('id').primary()
    table.date('date')
    table.date('day')
    table.time('start_time').notNullable()
    table.time('end_time').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('timeslot')
}
