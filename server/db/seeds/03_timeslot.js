/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('timeslot').del()
  await knex('timeslot').insert([
    {
      id: 1,
      date: '2023-3-27',
      day: 'Monday',
      start_time: '09:00',
      end_time: '11:00',
      appointment_id: 1,
    },
    {
      id: 2,
      date: '2023-2-21',
      day: 'Wednesday',
      start_time: '09:00',
      end_time: '13:00',
      appointment_id: 2,
    },
    {
      id: 3,
      date: '2023-1-2',
      day: 'Friday',
      start_time: '06:00',
      end_time: '07:00',
      appointment_id: 3,
    },
  ])
}
