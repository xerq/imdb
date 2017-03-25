const imdb = require('../index.js');
const expect = require('chai').expect;
const id = '3659388';

describe('movie', function() {
  this.timeout(10000);

  it('does return correct fields', (done) => {
    imdb(`tt${id}`, (err, data) => {
      if(err)
        throw err;

      if(data) {
        expect(data).to.have.property('title');
        expect(data).to.have.property('year');
        expect(data).to.have.property('contentRating');
        expect(data).to.have.property('runtime');
        expect(data).to.have.property('description');
        expect(data).to.have.property('rating');
        expect(data).to.have.property('poster');
        expect(data).to.have.property('genre');
        expect(data).to.have.property('director');
        expect(data).to.have.property('metascore');
        expect(data).to.have.property('writer');
        expect(data).to.have.property('language');
        done();
      }
    });
  });
});