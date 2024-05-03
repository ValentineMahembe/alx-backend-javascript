const request = require('request');
const { expect } = require('chai');

const app = require('./api');

describe('Index page', function() {
  it('should return status code 200', function(done) {
    request.get('http://localhost:7865/', function(error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 404 for invalid routes', function(done) {
    request.get('http://localhost:7865/invalid', function(error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return content type as text/html', function(done) {
    request.get('http://localhost:7865/', function(error, response) {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should respond within a reasonable time frame', function(done) {
  const startTime = Date.now();
  request.get('http://localhost:7865/', function(error, response) {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    expect(responseTime).to.be.lessThan(3000); // Assuming response time should be less than 3 seconds
    done();
  });
});


  it('should return a non-empty response body', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(body).to.not.be.empty;
      done();
    });
  });
});
