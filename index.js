var BaseElement = require('min-document/dom-element')
var BaseDocument = require('min-document/document')

function Element (tagName, document) {
  BaseElement.call(this, tagName, document)
}
Element.prototype = Object.create(BaseElement.prototype)

Object.defineProperties(Element.prototype, {
  firstChild: {
    get: function () { return this.childNodes[0] }
  },
  lastChild: {
    get: function () { return this.childNodes[this.childNodes.length - 1] }
  }
})

function Document () {
  BaseDocument.call(this)
}
Document.prototype = Object.create(BaseDocument.prototype)

Document.prototype.createElement = function (tagName) {
  return new Element(tagName, this)
}

var window = {
  // React does an instanceof check on this
  HTMLIFrameElement: function () {},
  document: new Document()
}

module.exports = {
  window: window,
  document: window.document
}
