$(function() {
	/**
	*
	*
	*	BASE STRUCTURE
	*
	*
	*/
	var App = {
		Reference: {},
		View: {},
		Collection: {}
	};



	/**
	*
	*
	*	RETRIEVE DATA
	*
	*
	*/
	var requestStream = Rx.Observable.just('api/pokemon.json');
	var responseStream = requestStream
		.flatMap(function (reqURL) {
			return Rx.Observable.fromPromise($.getJSON(reqURL));
		});
	responseStream.subscribe(function (res) {
		App.Collection.pokedex = res;
	});



	/**
	*
	*
	*	MAIN APPLICATION
	*
	*
	*/
	(function () {
		/**
		*
		*
		*	ROUTER
		*
		*
		*/
		var routes = {
			'/pokemon/:id': pokemonRoute
		}
		Router(routes).init();



		/**
		*
		*
		*	POKEMON CONTROLLER
		*
		*
		*/
		function pokemonRoute(id) {
			App.Reference.pokemonID = parseInt(id);
			// if (!App.Collection.pokedex)
			// 	responseStream.subscribe(function () {
			// 		renderPokemon(App.Reference.pokemonID);
			// 	});
			// else renderPokemon(App.Reference.pokemonID);
		}



		/**
		*
		*
		*	POKEMON RENDER
		*
		*
		*/
		function renderPokemon(id) {
			var i = id - 1;
			if (!App.View.pokemon) App.View.pokemon = rivets.bind($('#pokemon'));
			App.View.pokemon.update({pokemon: App.Collection.pokedex[i]});
		}
	})();
});
