$(function () {
	/**
	*
	*
	*	BASE STRUCTURE
	*
	*
	*/
	var App = {
		Router: {},
		Model: {},
		Collection: {},
		View: {}
	};



	/**
	*
	*
	*	MODELS
	*
	*
	*/
	App.Model.Pokemon = Backbone.Model.extend({});



	/**
	*
	*
	*	COLLECTIONS
	*
	*
	*/
	App.Collection.Pokemon = Backbone.Collection.extend({
		model: App.Model.Pokemon,
		url: 'api/pokemon.json'
	});

	// Instance
	App.Collection.pokemonList = new App.Collection.Pokemon();



	/**
	*
	*
	*	ROUTERS
	*
	*
	*/
	App.Router.Pokedex = Backbone.Router.extend({
		routes: {
			'pokemon/:natId': 'render'
		},
		render: function (natId) {
			if (natId !== null) {
				console.log('natId = ' + natId);
				window.filter = natId.trim() || '';
				App.Collection.pokemonList.trigger('natIdChange')
			} else {
				console.log('No params specified');
			}
		}
	});

	// Instance
	App.Router.router = new App.Router.Pokedex();
	Backbone.history.start();



	/**
	*
	*
	*	VIEWS
	*
	*
	*/

	/* View for a single Pokemon */
	App.View.PokemonView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#pokemon-template').html()),
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	/* View for a complete Pokedex, composed of multiple Pokemon */
	App.View.AppView = Backbone.View.extend({
		el: 'ul',
		initialize: function () {
			App.Collection.pokemonList.on('reset', this.addAll, this);
			// App.Collection.pokemonList.on('add', this.renderOne, this);
			App.Collection.pokemonList.on('natIdChange', this.addAll, this);
			App.Collection.pokemonList.fetch({reset: true});
		},
		addOne: function (pokemon) {
			var view = new App.View.PokemonView({model: pokemon});
			this.$el.append(view.render().el);
		},
		addAll: function () {
			// App.Collection.pokemonList.each(this.addOne, this);
			if (window.filter) {
				var view = new App.View.PokemonView({model: App.Collection.pokemonList.get(window.filter)});
				this.$el.html(view.render().el);
			} else {
				console.log('Error: no params specified')
			}
		}
	});

	// Instance
	App.View.appView = new App.View.AppView();


	/**
	*
	*
	*	INITIALIZERS
	*
	*
	*/


});
