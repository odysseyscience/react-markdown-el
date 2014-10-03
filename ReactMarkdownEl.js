
var React = require('react'),
    markdown = require('markdown');

var MarkdownEl = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        el: React.PropTypes.oneOf(Object.keys(React.DOM))
    },

    getDefaultProps: function() {
        return {
            el: 'div'
        };
    },

    render: function() {
        var El = React.DOM[this.props.el];
        return this.transferPropsTo(El({
            className: 'markdown',
            dangerouslySetInnerHTML: { __html: markdown.parse(this.props.text) }
        }));
    }

});

module.exports = MarkdownEl;
