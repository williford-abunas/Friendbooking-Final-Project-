export async function seed(knex) {
  await knex('appointment').del()
  await knex('users').del()
}
