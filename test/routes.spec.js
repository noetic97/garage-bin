const chai = require('chai');
const chaiHttp = require('chai-http');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('garage_item API routes', () => {
  before((done) => {
    db.migrate.latest()
      .then(() => done())
      .catch((err) => {
        throw new Error(err);
      });
  });

  beforeEach((done) => {
    db.seed.run()
      .then(() => done())
      .catch((err) => {
        throw new Error(err);
      });
  });

  describe('GET /api/v1/items', () => {
    it('should return an array of items', (done) => {
      chai.request(server)
        .get('/items')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          done();
        });
    });
  });
});
