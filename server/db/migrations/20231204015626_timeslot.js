/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('timeslot', function (table) {
    table.increments('id').primary()
    table.date('date')
    table.string('day')
    table.time('start_time').notNullable()
    table.time('end_time').notNullable()
    table.integer('appointment_id').references('appointment.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('timeslot')
}
