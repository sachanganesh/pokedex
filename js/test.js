$(function() {
	// Make call to Pokedex API
	var requestStream = Rx.Observable.just('api/pokemon.json');

	// Receive data from Pokedex API call
	var responseStream = requestStream
		.flatMap(function (reqURL) {
			return Rx.Observable.fromPromise($.getJSON(reqURL));
		});

	// Subscribe to data from Pokedex API call
	responseStream.subscribe(function (res) {
		res.forEach(function (pokemon) {
			// Do something with each pokemon
		});
	});
});
