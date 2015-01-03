App.Model.Pokemon = Backbone.Model.extend({
  defaults: {
    natID: 1
  },
  initialize: function (props) {
    this.natID = props.natID;
  },
  url: 'http://pokeapi.co/api/v1/pokemon/' + this.natID + '/'
});
