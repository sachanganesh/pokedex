App.View.PokemonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#pokemon-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this; // enable chained calls
  }
});

App.View.AppView = Backbone.View.extend({
  el: 'ol',
  initialize: function () {
    App.Collection.pokemonList = new App.Collection.Pokemon();
    for (var i = 1; i <= 30; i++) {
      App.Collection.pokemonList.create({natID: i});
    }
    console.log(App.Collection.pokemonList);
  },
  add: function (pokemon) {
    console.log('error?')
    var view = new App.View.PokemonView({model: pokemon});
    this.$el.append(view.render().el);
  }
});

App.View.appView = new App.View.AppView();
