/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, username: 'Bob', role: 'user' },
    { id: 2, username: 'Sam', role: 'user' },
    { id: 3, username: 'Tom', role: 'user' },
  ])
}
