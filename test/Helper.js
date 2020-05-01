const Helpers = module.exports;
const db = require('../app/utils/db');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('category').del();
};

Helpers.insert = async () => {
  await db('category').insert([
    { idcategory: 1, nomcategory: 'hogar y tecnologia' },
    { idcategory: 2, nomcategory: 'moda' },
    { idcategory: 3, nomcategory: 'belleza y cuidado' },
    { idcategory: 4, nomcategory: 'juguetes y bebés' },
    { idcategory: 5, nomcategory: 'libros' },
    { idcategory: 6, nomcategory: 'instrumentos musicales' },
    { idcategory: 7, nomcategory: 'herramientas e industria' },
  ]);
};
