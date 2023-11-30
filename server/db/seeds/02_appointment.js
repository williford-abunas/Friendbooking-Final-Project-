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
      start_time: '2023-12-01 08:00:00',
      end_time: '2023-12-01 09:00:00',
      user_id: 1,
    },
    {
      id: 2,
      title: 'lunch',
      description: 'love to talk about something',
      start_time: '2023-12-01 13:00:00',
      end_time: '2023-12-01 14:00:00',
      user_id: 2,
    },
    {
      id: 3,
      title: 'dinner',
      description: 'I have a problem',
      start_time: '2023-12-01 20:00:00',
      end_time: '2023-12-01 21:00:00',
      user_id: 3,
    },
  ])
}
