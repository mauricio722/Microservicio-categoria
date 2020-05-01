const categoryService = module.exports;
const categoryRepository = require('../repositories/categoryRepository');
const log4j = require('../utils/logger');

const defaultLogger = log4j.getLogger('categoryService');

categoryService.getCategorys = async (options = {}) => {
  const { logger = defaultLogger } = options;
  logger.info('categoryService.getCategorys');

  return categoryRepository.getCategorys();
};


categoryService.getCategoryByIdcategory = async (idcategory, options = {}) => {
  const { logger = defaultLogger } = options;
  logger.info(`categoryService.getCategoryByIdcategory ${JSON.stringify(idcategory)}`);

  return categoryRepository.getCategoryByIdcategory(idcategory);
};

categoryService.getNomcategory = async (nomcategory, options = {}) => {
  const { logger = defaultLogger } = options;
  logger.info(`categoryService.getNomcategory ${JSON.stringify(nomcategory)}`);

  return categoryRepository.getNomcategory(nomcategory);
};
