/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('costumers').del()
  await knex('costumers').insert([
    {id: 1, full_name: 'Sergio',address:'Natal , Brazil',born_date:'1999-07-13',phone_number:'+55 849080808'},
    {id: 2, full_name: 'Bryan Adms',address:'Washington DC , EUA',born_date:'2000-01-03',phone_number:'+22 2345 123'},
    {id: 3, full_name: 'Kataryne even',address:'New Work , EUA',born_date:'1997-08-15',phone_number:'+22 1234 456'}
  ]);
};
