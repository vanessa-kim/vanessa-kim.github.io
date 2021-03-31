const path = require('path');

module.exports = {
  publicPath: '/', 
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "scss/_index.scss";`
      },
    },
  },
}
