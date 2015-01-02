var app = {};

app.Pokemon = Backbone.Model.extend({
  defaults: {
    name: 'Pokemon'
  }
})

app.PokemonList = Backbone.Collection.extend({
  model: app.Pokemon,
  localStorage: new Backbone.LocalStorage("PokemonCollection")
});

app.PokemonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#pokemon-template').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this; // enable chained calls
  }
});

var pokemon = new app.Pokemon({name: 'Bulbasaur'});

var view = new app.PokemonView({model: pokemon});
