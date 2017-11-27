var mainServer = require('live-server')
var firstLevelServer = require('live-server')
var secondLevelServer = require('live-server')

mainServer.start({open: false, port: 8180, root: './src/main'})
firstLevelServer.start({open: false, port: 8181, root: './src/first-level'})
secondLevelServer.start({open: false, port: 8182, root: './src/second-level'})
