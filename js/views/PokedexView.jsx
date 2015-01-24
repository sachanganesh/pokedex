/** @jsx React.DOM */

var Pokedex = React.createClass({
  render: function () {
    var list = new App.Collection.Pokemon();
    list.fetch();
    list.forEach(function (elem) {
      console.log(JSON.stringify(elem))
    })
    return (
      <ol>
        {
          list.map(function (pokemon) {
            return <Pokemon name={pokemon.name} />
          })
        }
      </ol>
    );
  }
});

React.render(<Pokedex />, document.getElementById('PokedexApp'));