const imdb = require('../index.js');
const expect = require('chai').expect;
const id = '0933988';

describe('actor', function() {
  this.timeout(10000);

  it('does return correct fields', (done) => {
    imdb(`nm${id}`, (err, data) => {
      if(err)
        throw err;

      if(data) {
        expect(data).to.have.property('name');
        expect(data).to.have.property('moviesList');
        expect(data).to.have.property('tvList');
        done();
      }
    });
  });
});