
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('garage_item', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('reason_to_store', 500).notNullable();
      table.enum('cleanliness', ['Sparkling', 'Dusty', 'Rancid']).notNullable();
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('garage_item'),
  ]);
};
