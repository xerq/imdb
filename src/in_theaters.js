const request = require('request')
const cheerio = require('cheerio')

export default (cb) => {
  request('http://www.imdb.com/movies-in-theaters/', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      body = body.replace(/(\r\n|\n|\r)/gm, '').replace(/ +(?= )/g, '')
      const $ = cheerio.load(body)

      let header = $('div#main > div.article.listo.nm > h1.header > a').text()

      let movies = [];

      $('div#main > div.article.listo.nm > div.list.detail.sub-list > div.list_item').each(function(i, elm) {
      	let poster = $(this).find('img.poster.shadowed').attr('src') || 'N/A'

      	let titleElement = $(this).find('.overview-top > h4 > a').text()
      	let title = titleElement.replace(/\(\d{4}\)/gi,'').trim() || 'N/A'
      	let year = titleElement.match(/\(\d{4}\)/gi,'')[0].replace(/(\(|\))/gi,'') || 'N/A'
      	let contentRating = $(this).find('.overview-top > p.cert-runtime-genre > img').attr('title') || 'Not Rated'
      	let runtime = $(this).find('.overview-top > p.cert-runtime-genre > time').text() || 'N/A'
      	
      	let genres = []
      	$(this).find('.overview-top > p.cert-runtime-genre > span[itemprop="genre"]').each((i, elm) => {
      		let genre = $(this).text() || 'N/A'
      		genres.push(genre)
      	})

      	let metascore = $(this).find('.overview-top > div.rating_txt > div.metascore > strong').text() || 'N/A'
      	let description = $(this).find('.overview-top > div.outline[itemprop="description"]').text().trim() || 'N/A'
      	let director = $(this).find('.overview-top > div.txt-block > span[itemprop="director"] > span > a').text() || 'N/A'
      	let ratingElement = $(this).find('.overview-top span.rating-rating span.value')[0];
      	let rating = ratingElement ? $(ratingElement).text() : 'N/A'

      	let imdbId = $(this).find('.overview-top > h4 > a').attr('href').match(/tt\d+/i)[0] || 'N/A'


      	movies.push({
      		title: title,
      		year: year,
      		metascore: metascore,
      		rating: rating,
      		runtime: runtime,
      		genre: genres,
      		contentRating: contentRating,
      		poster: poster,
      		description: description,
      		director: director,
      		imdbId: imdbId
      	});
      });


      cb(null, {
      	movies: movies
      });

  	} else {
      cb(new Error('IMDB Failed to respond, or responded with error code'), null)
    }
  })
}