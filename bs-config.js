var historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  "port": 8080,
  "files": ["./build/**/*"],
  "server": {
    "baseDir": "./build",
    "routes": {
        "/node_modules": "./node_modules",
        "/assets": "./public"
    }
  },
  "watchOptions": {
    "usePolling": true,
    "interval": 2000
  },
  "codeSync": true,
  "injectChanges": true,
   middleware: [ historyApiFallback() ]
}
