exports.up = knex =>
  knex.schema.createTable('category', (table) => {
    table.increments('idcategory');
    table.text('nomcategory');
  });

exports.down = knex => knex.schema.dropTable('category');

