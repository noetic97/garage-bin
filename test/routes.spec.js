const chai = require('chai');
const chaiHttp = require('chai-http');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

const { app } = require('../server');

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
      chai.request(app)
        .get('/api/v1/items')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.should.be.json; //eslint-disable-line
          res.body.should.be.a('array');
          res.body.should.have.length(6);
          res.body.forEach((item) => {
            item.should.include.keys(
              'id',
              'name',
              'reason_to_store',
              'cleanliness');
          });
          res.body[0].name.should.equal('Comic Books');
          res.body[0].reason_to_store.should.equal('These will be worth so much money one day!');
          res.body[0].cleanliness.should.equal('Sparkling');
          res.body[0].id.should.be.a('number');
          res.body[0].name.should.be.a('string');
          res.body[0].reason_to_store.should.be.a('string');
          res.body[0].cleanliness.should.be.a('string');
          done();
        });
    });
  });

  describe('POST /api/v1/items', () => {
    it('should return the new item that was added', (done) => {
      chai.request(app)
        .post('/api/v1/items')
        .send({
          name: 'Gold Bar',
          reason_to_store: 'This might be worth something one day',
          cleanliness: 'Sparkling',
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(201);
          res.should.be.json; //eslint-disable-line
          res.body.should.be.a('array');
          res.body.should.have.length(1);
          res.body.forEach((item) => {
            item.should.include.keys(
              'id',
              'name',
              'reason_to_store',
              'cleanliness');
          });
          res.body[0].name.should.equal('Gold Bar');
          res.body[0].reason_to_store.should.equal('This might be worth something one day');
          res.body[0].cleanliness.should.equal('Sparkling');
          res.body[0].id.should.be.a('number');
          res.body[0].name.should.be.a('string');
          res.body[0].reason_to_store.should.be.a('string');
          res.body[0].cleanliness.should.be.a('string');
          done();
        });
    });
  });

  describe('PATCH /api/v1/items/:id', () => {
    it('should update the properties of the selected item', (done) => {
      chai.request(app)
        .get('/api/v1/items')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.body[0].name.should.equal('Comic Books');
          res.body[0].reason_to_store.should.equal('These will be worth so much money one day!');
          res.body[0].cleanliness.should.equal('Sparkling');
          const id = res.body[0].id;

          chai.request(app)
            .patch(`/api/v1/items/${id}`)
            .send({
              name: 'Pokemon Cards',
            })
            .end((error, response) => {
              response.body[0].name.should.equal('Pokemon Cards');
              response.body[0].reason_to_store.should.equal('These will be worth so much money one day!');
              response.body[0].cleanliness.should.equal('Sparkling');
              done();
            });
        });
    });
  });

  describe('DELETE /api/v1/items/:id', () => {
    it('should remove the selected item', (done) => {
      chai.request(app)
        .get('/api/v1/items')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.should.be.json; //eslint-disable-line
          res.body.should.be.a('array');
          res.body.should.have.length(6);
          const id = res.body[0].id;

          chai.request(app)
            .delete(`/api/v1/items/${id}`)
            .end((err1, res1) => {
              res1.body.should.equal('You have removed the item');

              chai.request(app)
                .get('/api/v1/items')
                .end((err2, res2) => {
                  res2.body.should.have.length(5);
                  done();
                });
            });
        });
    });
  });
});
