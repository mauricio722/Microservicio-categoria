exports.up = knex =>

  knex.schema.createTable('category', (table) => {
    table.increments('idcategory').unsigned().notNullable();
    table.text('nomcategory').unsigned().notNullable();
  }).then(() => knex('category').insert([
    { idcategory: 1, nomcategory: 'hogar' },
    { idcategory: 2, nomcategory: 'moda' },
    { idcategory: 3, nomcategory: 'belleza y cuidado' },
    { idcategory: 4, nomcategory: 'juguetes y bebés' },
    { idcategory: 5, nomcategory: 'libros' },
    { idcategory: 6, nomcategory: 'instrumentos musicales' },
    { idcategory: 7, nomcategory: 'herramientas e industria' },
    { idcategory: 8, nomcategory: 'celulares y tables' },
    { idcategory: 9, nomcategory: 'deportes' },
    { idcategory: 10, nomcategory: 'electrodomesticos' },
  ]));
exports.down = knex => knex.schema.dropTable('category');
