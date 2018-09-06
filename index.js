var document = require('min-document')

var window = {
  // React does an instanceof check on this
  HTMLIFrameElement: function () {},
  document: document
}

module.exports = {
  window: window,
  document: document
}
