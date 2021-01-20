module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer: {
    proxy: 'http://10.131.150.226:8080'
  }
}
