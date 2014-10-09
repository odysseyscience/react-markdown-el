react-markdown-el
===========================

Provides a simple `React` component that renders markdown text in an element.

Install
-----------

    $ npm install react-markdown-el

Usage
------------

Basic usage just takes in markdown as a `text` property:

    var Markdown = require('react-markdown-el');

    ...
    render: function() {
      var text = "This *is* some `markdown` [text](http://example.com)";
      return (
        <Markdown text={text}/>
      )
    }


This will render a `<div>` with `class="markdown"` by default.  You can change the tag, or add your own properties very easily:

    <Markdown el="a"
              href="http://example.com"
              className="custom-markdown-link"
              text={text} />
