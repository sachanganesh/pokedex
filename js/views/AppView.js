$(function () {
  App.View.AppView = Backbone.View.extend({
    el: 'ol',
    initialize: function () {
      App.Collection.pokemonList = new App.Collection.Pokemon();
      App.Collection.pokemonList.on('reset', this.addAll, this);
      App.Collection.pokemonList.on('add', this.addOne, this);
      App.Collection.pokemonList.fetch();
    },
    addOne: function (pokemon) {
      var view = new App.View.PokemonView({model: pokemon});
      $('ol').append(view.render().el);
    },
    addAll: function () {
      App.Collection.pokemonList.each(this.addOne, this);
    }
  });

  App.View.appView = new App.View.AppView();
});
