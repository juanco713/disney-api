const request = require('supertest');
const expect = require('chai').expect;
const { server } = require('../index');
const { connectDB } = require('../src/database/index');


describe('Register API', function() {
    before(function(done){
        connectDB;
        done();
    });
    it('Should success if credential is valid', function(done) {
        request(server)
           .post('/auth/register')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send(
               {email: 'salchichaperuana@gmail.com',
                password: '141414'
             })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});

describe('Login API', function() {
    before(function(done){
        connectDB;
        done();
    });
    it('Should success if credential is valid', function(done) {
        request(server)
           .post('/auth/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send(
               {email: 'admin@gmail.com',
                password: '12345'
             })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});

