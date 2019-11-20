const path = require('path')
const dotenv = require('dotenv')
const debug = require('debug')('auth:server:config:index')

let configPath = path.resolve(__dirname, '.env.dev')
switch (process.env.NODE_ENV) {
  case 'production': {
    configPath = path.resolve(__dirname, '.env.pro')
    break
  }
  case 'staging': {
    configPath = path.resolve(__dirname, '.env.sta')
    break
  }
  case 'debug': {
    configPath = path.resolve(__dirname, '.env.deb')
    break
  }
  default: {
    configPath = path.resolve(__dirname, '.env.dev')
    break
  }
}
debug.enabled && debug('configPath %s', configPath)
dotenv.config({ path: configPath })
