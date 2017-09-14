
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('garage_items', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('reason').notNullable();
      table.enum('cleanliness', ['Sparkling', 'Dusty', 'Rancid']).notNullable();
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('garage_items'),
  ]);
};
