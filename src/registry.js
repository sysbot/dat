var xtend = require('xtend')
var RegistryClient = require('dat-registry')

module.exports = function (opts) {
  var townshipOpts = {
    server: opts.server,
    config: {
      filepath: opts.config || '.datrc'
    }
  }
  var defaults = {
    // xtend doesn't overwrite when key is present but undefined
    // If we want a default, make sure it's not going to passed as undefined
  }
  var options = xtend(defaults, townshipOpts)
  return RegistryClient(options)
}
