imdb
====
![npm](https://img.shields.io/npm/v/imdb.svg)
![downloads](https://img.shields.io/npm/dt/imdb.svg)

An IMDB API for getting information on your favourite movies!

## Installing
Install via [npm](https://npmjs.com)

    $ npm install --save imdb

## Running / Building
To run the example:

    $ npm install
    $ node examples/movie.js
    
## API / Usage

Provide the IMDB ID and go! Also see the `examples/` folder for inspiration!

```javascript
import imdb from 'imdb';

imdb('tt3659388', (err, data) => {
  if (err)
    console.log(err.stack);

  if (data)
    console.log(data);
});
```

This will return an object similar to this:

```
{ title: 'Marsjanin',
  year: '2015',
  contentRating: '12',
  runtime: '2h 24min',
  description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
  rating: '8.0',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
  genre: [ 'Adventure', ' Drama', ' Sci-Fi' ],
  director: 'Ridley Scott',
  metascore: '80',
  writer: 'Drew Goddard',
  language: 'English, Mandarin',
  review: 'Having read the book, and being very impressed, I was looking forward to the movie interpretation. I was not the least bit disappointed. I was hoping this movie would not be an overacted, overproduced and sappy version of the original, and I was pleasantly surprised that the story played out without the overblown extraneous embellishment that Hollywood seems to depend on so often.It was great to see how the screenplay added extra material that was not in the book, and it enhanced the story to make it even better. The characters were interpreted with full respect to the intention of the author, Andy Weir, and nothing was overdone. The pacing and editing of this movie was some of the best I\'ve seen, in fact, some of the one-liners from the book are done so quickly it pushed the story forward relentlessly. One thing that struck me is that everyone seemed to be enjoying themselves, and I think that could be a testament to the originality and uniqueness of the book. I believe anyone who reads the book is captivated and involved with the story from beginning to end, and it\'s possible this comes across in all phases of the production; the acting, the sets, sound, everything. They all knew they had some great material to work with and ran with it.' }

```
