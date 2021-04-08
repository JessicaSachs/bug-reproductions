const webpackConfig = require('@vue/cli-service/webpack.config')
const { startDevServer } = require('@cypress/webpack-dev-server')

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({ webpackConfig, options })
  })
  return config;

}