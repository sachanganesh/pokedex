$(function () {
  App.Collection.Pokemon = Backbone.Collection.extend({
    model: App.Model.Pokemon,
    url: 'http://pokeapi.co/api/v1/pokedex/1/',
    parse: function (resp) {
      return resp.pokemon;
    }
  });
});

// localStorage: new Backbone.LocalStorage("App.Collection.Pokemon")
