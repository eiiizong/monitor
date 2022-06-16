// 入口：index.js
if (module.hot) {
  module.hot.accept() // bundle.js 支持HMR
}
// var a = 'ceshi'
const a = (function () {
  return [1, 2, 3]
})()

const b = a.includes(3)
throw new Error(123)
console.log(b)
