
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./owoify-js.cjs.production.min.js')
} else {
  module.exports = require('./owoify-js.cjs.development.js')
}
