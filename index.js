/** @jsx React.DOM */

var React = require('react');
var suitcss = require('suitcss-mixin');

var Button = React.createClass({

  mixins: [suitcss],

  /* LOGIC */

  /* LIFECYCLE EVENTS */

  /* RENDER */

  render: function () {
    return this.transferPropsTo(
      React.DOM.button({ className: this.classNames('Button') }, this.props.children)
    );
  },

});

module.exports = Button;
