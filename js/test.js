$(function() {
	var pokedex = null,
	pokemonID = 1,
	template = null;

	function initRouter() {
		var routes = {
			'/pokemon/:id': function (id) {
				pokemonID = parseInt(id);
				if (pokedex != null) renderPokemon(pokemonID);
			}
		}

		var router = Router(routes);
		router.init();
	}
	initRouter();

	// Make call to Pokedex API
	var requestStream = Rx.Observable.just('api/pokemon.json');

	// Receive data from Pokedex API call
	var responseStream = requestStream
		.flatMap(function (reqURL) {
			return Rx.Observable.fromPromise($.getJSON(reqURL));
		});

	// Subscribe to data from Pokedex API call
	responseStream.subscribe(function (res) {
		pokedex = res;
		renderPokemon(pokemonID);
	});

	function renderPokemon(id) {
		i = id - 1;
		if (template == null) template = rivets.bind($('#pokemon'), {pokemon: pokedex[i]});
		else template.update({pokemon: pokedex[i]});
	}
});
