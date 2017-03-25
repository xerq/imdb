const imdb = require('../index.js');
const expect = require('chai').expect;

describe('in_theater', function() {
  this.timeout(10000);

  it('does return correct fields', (done) => {
    imdb('in_theaters', (err, data) => {
      if(err)
        throw err;

      if(data) {
        expect(data).to.have.property('movies');
        done();
      }
    });
  });
});