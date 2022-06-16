// 入口：index.js
if (module.hot) {
  module.hot.accept() // bundle.js 支持HMR
}
var a = 'ceshi'

console.log(a)
