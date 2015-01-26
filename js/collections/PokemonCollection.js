$(function () {
  App.Collection.Pokemon = Backbone.Collection.extend({
    model: App.Model.Pokemon,
    url: 'api/pokemon.json'
  });
});