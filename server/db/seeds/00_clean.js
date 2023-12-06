export async function seed(knex) {
  await knex('timeslot').del()
  await knex('appointment').del()
  await knex('users').del()
}
