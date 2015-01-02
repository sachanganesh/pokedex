app.PokemonList = Backbone.Collection.extend({
  model: app.Pokemon,
  localStorage: new Backbone.LocalStorage("PokemonCollection")
});

app.list = new app.PokemonList();
app.list.create({name: 'Bulbasaur'});
app.list.create({name: 'Charmander'});

console.log(app.list.pluck('name'));
