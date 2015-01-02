app.PokemonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#pokemon-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this; // enable chained calls
  }
});

app.AppView = Backbone.View.extend({
  el: 'ol',
  initialize: function () {
    console.log('hello there')
    app.list.each(this.add, this);
    console.log('initialized');
  },
  add: function (pokemon) {
    console.log('adding..');
    var view = new app.PokemonView({model: pokemon});
    this.$el.append(view.render().el);
  }
});

app.appView = new app.AppView();
