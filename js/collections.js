App.Collection.Pokemon = Backbone.Collection.extend({
  model: App.Model.Pokemon,
  localStorage: new Backbone.LocalStorage("App.Collection.Pokemon")
});

// localStorage: new Backbone.LocalStorage("App.Collection.Pokemon")
