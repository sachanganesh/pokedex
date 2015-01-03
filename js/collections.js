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

// ,
// comparator: function (pokemon) {
//   console.log(JSON.stringify(pokemon))
//   var val = parseInt(pokemon.resource_uri.substring(15, pokemon.resource_uri.length - 1));
//   return val;
// }
