$(function() {
	/**
	 *	app
	 *
	 *	object containing all application properties
	*/
	var app = {
		reference: {},
		view: {},
		collection: {}
	};

	// Make call to app.collection.pokedex API
	var requestStream = Rx.Observable.just('api/pokemon.json');

	// Receive data from app.collection.pokedex API call
	var responseStream = requestStream
		.flatMap(function (reqURL) {
			return Rx.Observable.fromPromise($.getJSON(reqURL));
		});

	// Subscribe to data from app.collection.pokedex API call
	responseStream.subscribe(function (res) {
		app.collection.pokedex = res;
	});

	/**
	 *	anonymous
	 *
	 *	invoked in order to render specific pokemon
	*/
	(function () {
		var routes = {
			'/pokemon/:id': function (id) {
				console.log(id);
				app.reference.pokemonID = parseInt(id);
				if (!app.collection.pokedex)
					responseStream.subscribe(function () {
						renderPokemon(app.reference.pokemonID);
					});
				else renderPokemon(app.reference.pokemonID);
			}
		}

		var router = Router(routes);
		router.init();

		function renderPokemon(id) {
			var i = id - 1;
			if (!app.view.pokemon) app.view.pokemon = rivets.bind($('#pokemon'));
			app.view.pokemon.update({pokemon: app.collection.pokedex[i]});
		}
	})();
});
