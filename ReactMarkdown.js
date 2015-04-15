
var React = require('react'),
    markdown = require('markdown'),
    objectAssign = require('object-assign');

var Markdown = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        el: React.PropTypes.oneOf(Object.keys(React.DOM))
    },

    getDefaultProps: function() {
        return {
            el: 'div',
            text: ''
        };
    },

    render: function() {
        var El = React.DOM[this.props.el];
        var props = objectAssign({}, this.props, {
            className: 'markdown',
            dangerouslySetInnerHTML: { __html: markdown.parse(this.props.text) }
        });
        return El(props);
    }

});

module.exports = Markdown;
