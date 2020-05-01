const express = require('express');
const categoryController = require('../app/controllers/categoryController');

const router = express.Router();

router.get('/categorys', categoryController.getCategorys);
router.get('/categorys/:idcategory', categoryController.getCategoryByIdcategory);
router.get('/categorys/:nomcategory/category', categoryController.getNomcategory);


module.exports = router;

