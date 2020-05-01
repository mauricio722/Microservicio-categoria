const categoryController = module.exports;
const categoryService = require('../services/categoryService');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const log4j = require('../utils/logger');
const LogUtils = require('../utils/LogUtils');
const Validator = require('../validators/validator');
const idcategorySchema = require('../validators/idcategorySchema');
const nomcategorySchema = require('../validators/nomcategorySchema');

// all categorys
categoryController.getCategorys = async (req, res) => {
  const logName = 'category';
  const logger = LogUtils.getLoggerWithId(log4j, logName);

  return categoryService.getCategorys({ logger, logName })
    .then(response => res.send(response));
};

// category for id
categoryController.getCategoryByIdcategory = async (req, res, next) => {
  const logName = 'category id: ';
  const logger = LogUtils.getLoggerWithId(log4j, logName);
  const { params } = req;


  params.idcategory = parseFloat(params.idcategory);
  logger.info(`categoryController.getCategoryByIdcategory: params ${JSON.stringify(params)}`);
  Validator(idcategorySchema).validateRequest(params);

  return categoryService.getCategoryByIdcategory(params.idcategory, { logger, logName })
    .then(response => res.send(response))
    .catch(error => next(new BaseError(error.message)));
};

categoryController.getNomcategory = async (req, res) => {
  const logName = 'category for nomcategory: ';
  const logger = LogUtils.getLoggerWithId(log4j, logName);
  const { params } = req;


  logger.info(`categoryController.getNomcategory: params ${JSON.stringify(params)}`);
  Validator(nomcategorySchema).validateRequest(params);

  return categoryService.getNomcategory(params.nomcategory, { logger, logName })
    .then(response => res.send(response));
};

