$(function () {
  App.View.PokemonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#pokemon-template').html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});