var test = require('tape')
var env = require('..')
var React = require('react')
var ReactDOM = require('react-dom')

Object.assign(global, env)

test('it renders', (t) => {
  t.plan(3)
  var wrapper = document.createElement('div')

  var expected = '<h1>It\'s tiny!</h1>'
  if (/^15\./.test(React.version)) {
    expected = '<h1 data-reactroot="">It\'s tiny!</h1>'
  }

  ReactDOM.render(React.createElement('h1', {}, 'It\'s tiny!'), wrapper, () => {
    t.equal(wrapper.childNodes.length, 1)
    t.equal(wrapper.childNodes[0].tagName, 'H1')
    t.equal(wrapper + '', '<div>' + expected + '</div>')
  })
})
