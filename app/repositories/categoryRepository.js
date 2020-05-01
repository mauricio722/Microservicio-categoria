const categoryRepository = module.exports;

const DB = require('../utils/db');

// search by id
categoryRepository.getCategoryByIdcategory = idcategory => DB('category').where({ idcategory }).select('*').first();

// search categorys
categoryRepository.getCategorys = () => DB('category').select('*');

// search for name
categoryRepository.getNomcategory = nomcategory => DB('category').where({ nomcategory }).select('*').first();
