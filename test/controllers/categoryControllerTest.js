const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const categoryRepository = require('../../app/repositories/categoryRepository');
const Helper = require('../Helper');

const API = '/api/category-ms/categorys';
const APP = '/api/category-ms/categorys';


chai.use(chaiHttp);

describe('DTB Category', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  describe('Categorys', () => {
    it('validation return all categorys', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(API)
        .then(async (res) => {
          const { body } = res;
          const data = await categoryRepository.getCategorys(body.getCategorys);
          console.log(data);
          assert.equal(data[0].idcategory, body[0].idcategory);
        });
    });

    it('validation return all categorys status 200', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(API)
        .then(async (res) => {
          const { status } = res;
          assert.equal(status, 200);
        });
    });

    it('validation not return enpty categorys', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(API)
        .then(async (res) => {
          const { status, body } = res;
          assert.notEqual(body.length, 0);
          assert.equal(status, 200);
        });
    });
  });

  describe('Category by id', () => {
    before(() => Helper.migrate());

    beforeEach(async () => {
      await Helper.clear();
    });

    it('validating category for id', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(`${APP}/2`)
        .then(async (res) => {
          const { body } = res;
          const data = await categoryRepository.getCategoryByIdcategory(body.idcategory);
          console.log(data, body);
          assert.equal(data.idcategory, body.idcategory);
        });
    });

    it('validating category status 200', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(`${APP}/2`)
        .then(async (res) => {
          const { status } = res;
          assert.equal(status, 200);
        });
    });

    it('validating category for id', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(`${APP}/a`)
        .then(assert.fail)
        .catch((err) => {
          assert.equal(err.status, 500);
        });
    });
  });

  describe('Category by nomcategory', () => {
    it('validation for name', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(`${API}/moda/category`)
        .then(async (res) => {
          const { body } = res;
          const data = await categoryRepository.getNomcategory(body.nomcategory);
          console.log(data);
          assert.equal(data.nomcategory, body.nomcategory);
        });
    });

    it('validation return all categorys status 200', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(`${API}/moda/category`)
        .then(async (res) => {
          const { status } = res;
          assert.equal(status, 200);
        });
    });

    it('validation not return enpty categorys', async () => {
      await Helper.insert();

      return chai
        .request(app)
        .get(`${API}/moda/category`)
        .then(async (res) => {
          const { status, body } = res;
          assert.notEqual(body, null);
          assert.equal(status, 200);
        });
    });
  });
});


describe('search idcategory', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  const idcategory = 1000;
  const errorRouteText = 'abcdefg';
  it('validation', () => chai
    .request(app)
    .get(`${API}/${idcategory}`)
    .then((response) => {
      const { body, status } = response;
      assert.equal(status, 200);
      console.log(body);
    }));


  it('register payments validation error', () => chai
    .request(app)
    .get(`${API}/${idcategory}`)
    .send({ })
    .catch((error) => {
      assert.equal(error.status, 400);
    }));

  it('path error text string is sent', () => chai
    .request(app)
    .get(`${API}/${errorRouteText}`)
    .then(assert.fail)
    .catch((error) => {
      assert.equal(error.status, 500);
    }));
});
