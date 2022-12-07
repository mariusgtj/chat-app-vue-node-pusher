const { defineConfig } = require('@vue/cli-service')

const path = require('path')


// Solution #1 (for automatic imports):
/**
 * Source
 * https://cli.vuejs.org/guide/css.html#automatic-imports 
*/ 

 module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },

})

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}

//************************************************* */

// Solution #2 (for automatic imports):
/**
 * Sources:
 * https://github.com/yenshih/style-resources-loader
*/ 

// module.exports = defineConfig({
//   transpileDependencies: true,

//   module: {
//     rules: [{
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader', {
//             loader: 'style-resources-loader',
//             options: {
//                 patterns: [
//                   path.resolve(__dirname, './src/assets/scss/*.scss'),
//                 ],
//             }
//         }]
//     }]
//   },

// })