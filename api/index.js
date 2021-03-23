const modulesFiles = require.context('./modules', true, /\.js$/)
const api = modulesFiles.keys().reduce((api, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    api[moduleName] = value.default
    return api
  }, {})


  export default api