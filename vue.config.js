/**
 * vue.config.js
 * Created by Matthew Ary on 2019-07-24.
 * Email: matthew.ary@acquisitionsimplicity.com
 *        matthewj.c.ary@gmail.com
 */

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    // https://github.com/vuejs/vue-cli/issues/4116#issuecomment-510288266
    // https://vuetifyjs.com/en/customization/sass-variables#single-file-components
    const e = ["vue-modules","vue","normal-modules","normal"];
    e.forEach((match) => {
      config.module.rule('scss').oneOf(match).use('sass-loader')
      // .tap(opt => Object.assign(opt, { data: `@import '~@/sass/main.sass'` })) // <-- THIS does not work but it's what written in the docs.
        .tap(opt => Object.assign(opt, { data: `@import '~@/sass/main.scss';` })) // <-- This does not work either.
    });
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/sass/main.scss"',
        implementation: require('sass'),
        fiber: require('fibers')
      }
    },
    sourceMap: true
  },
};
