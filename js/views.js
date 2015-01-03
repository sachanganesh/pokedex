$(function () {
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
      App.Collection.pokemonList.fetch({
        success: function (list) {
          list.each(function (pokemon) {
            console.log('adding');
            var view = new App.View.PokemonView({model: pokemon});
            $('ol').append(view.render().el);
          }, this);
      }});
    },
    add: function (pokemon) {
      console.log('adding');
      var view = new App.View.PokemonView({model: pokemon});
      this.$el.append(view.render().el);
    }
  });

  App.View.appView = new App.View.AppView();
});
