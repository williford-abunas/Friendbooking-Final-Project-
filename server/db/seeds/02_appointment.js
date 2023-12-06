/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('appointment').del()
  await knex('appointment').insert([
    {
      id: 1,
      title: 'breakfast',
      description: 'catch you up with something',
      user_id: 1,
    },
    {
      id: 2,
      title: 'lunch',
      description: 'love to talk about something',
      user_id: 2,
    },
    {
      id: 3,
      title: 'dinner',
      description: 'I have a problem',
      user_id: 3,
    },
  ])
}
