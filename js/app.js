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
			'': 'renderPokedex',
			'pokemon/:natId': 'renderPokemon'
		},
		renderPokedex: function () {
			App.Collection.pokemonList.trigger('notAccessed');
		},
		renderPokemon: function (natId) {
			if (natId !== null) {
				window.filter = natId.trim() || '';
				App.Collection.pokemonList.trigger('accessed')
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

	/* View for landing page */
	App.View.MainView = Backbone.View.extend({
		tagName: 'div',
		template: _.template($('#main-template').html()),
		render: function () {
			this.$el.html(this.template);
			return this;
		}
	})

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
		el: 'section#PokedexApp',
		initialize: function () {
			App.Collection.pokemonList.on('reset', this.renderMain, this);
			App.Collection.pokemonList.on('notAccessed', this.renderMain, this);
			App.Collection.pokemonList.on('accessed', this.renderPokemon, this);
			App.Collection.pokemonList.fetch({reset: true});
		},
		renderMain: function () {
			if (Backbone.history.fragment === '') {
				var view = new App.View.MainView();
				this.$el.html(view.render().el);
			} else {
				App.Collection.pokemonList.trigger('accessed');
			}
		},
		renderPokemon: function () {
			if (window.filter) {
				var view = new App.View.PokemonView({model: App.Collection.pokemonList.get(window.filter)});
				this.$el.html(view.render().el);
			}
		}
	});

	// Instance
	App.View.appView = new App.View.AppView();
});
