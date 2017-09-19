
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('garage_item', (table) => {
      table.boolean('item_display').default(false);
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('garage_item', (table) => {
      table.dropColumn('item_display');
    }),
  ]);
};
