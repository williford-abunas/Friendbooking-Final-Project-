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
      appointment_date: '2023-12-25',
      start_time: '08:00:00',
      end_time: '09:00:00',
      user_id: 1,
    },
    {
      id: 2,
      title: 'lunch',
      description: 'love to talk about something',
      appointment_date: '2023-12-25',
      start_time: '13:00:00',
      end_time: '14:00:00',
      user_id: 2,
    },
    {
      id: 3,
      title: 'dinner',
      description: 'I have a problem',
      appointment_date: '2023-12-25',
      start_time: '20:00:00',
      end_time: '21:00:00',
      user_id: 3,
    },
  ])
}
