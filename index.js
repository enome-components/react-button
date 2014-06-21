/** @jsx React.DOM */

import React from 'react/react.js';
import suitcss from 'suitcss-mixin/index.js';

var Button = React.createClass({

  mixins: [suitcss],

  render: function () {
    return this.transferPropsTo(
      <button className={this.classNames('Button')}>
        {this.props.children}
      </button>
    );
  },

});

export default Button;
