$(function () {
  App.Model.Pokemon = Backbone.Model.extend({
    defaults: {
      name: 'Pokemon',
      resource_uri: '/'
    }
  });
});
