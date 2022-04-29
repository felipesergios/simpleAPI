/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt')
const passwd = 'mypass'
const hash = bcrypt.hashSync(passwd,10)

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'admin@adm.com',password:hash},
    {id: 2, username: 'admin@admin2.com',password:'senha'},
    {id: 3, username: 'admin@admin3.com',password:hash}
  ]);
};
