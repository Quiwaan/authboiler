var db = require('../models');


db.movie.create({
	title:'Die Hard',
	year: 1988,
	genre: 'Christmas',
	runtime: 110,
	tagline: 'Yipee-kiaye'
})
.then(function(createdMovie){
	console.log('successfully created movie', createdMovie.title);
})
.catch(function(err){
	console.log('ERROR', err);
})
