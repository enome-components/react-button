/** @jsx React.DOM */

import React from 'react';
import suitcss from 'suitcss-mixin';

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

export default Button;
