var mainServer = require('./src/static-file-server')
var firstLevelServer = require('./src/static-file-server')
var secondLevelServer = require('./src/static-file-server')

mainServer({port: 8180, filePath: './src/main/index.html'})
firstLevelServer({port: 8181, filePath: './src/first-level/index.html'})
secondLevelServer({port: 8182, filePath: './src/second-level/index.html'})

console.log('Open browser on http://localhost:8180')