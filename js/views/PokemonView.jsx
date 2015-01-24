/** @jsx React.DOM */

var Pokemon = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Pokemon'
    }
  },
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <li>{this.props.name}</li>
    );
  }
});