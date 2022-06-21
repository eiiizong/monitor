import MonitorJS from './monitorjs.js'

export { MonitorJS }

window.MonitorJS = MonitorJS

window.onload = function () {
  // 测试
  const monitorjs = new MonitorJS()

  monitorjs.init({
    url: 'http://127.0.0.1:8000/api', // 错误上报地址
    jsError: true, // 配置是否需要监控js错误 （默认true）
    promiseError: true, // 配置是否需要监控promise错误 （默认true）
    resourceError: true, // 配置是否需要监控资源错误 （默认true）
    ajaxError: true, // 配置是否需要监控ajax错误 （默认true）
    consoleError: true, // 配置是否需要监控console.error错误 （默认false）
    vueError: false, // 配置是否需要记录vue错误信息 （默认false）
    vue: Vue, // 如需监控vue错误信息，则需要传入vue vue3则需要传入vue3的实例
    vueVersion: 2, // 如需监控vue错误信息，则需要传入vue
    extendsInfo: {
      //自定义扩展信息，一般用于数据持久化区分
      a: '', //自定义信息a（名称可自定义）可参考测试栗子 module
      b: '', //自定义信息b（名称可自定义）
      getDynamic: () => {
        //获取动态传参  1.4.5版本及以后支持该方式
      },
    },
  })

  // 启动页面性能监听
  monitorjs.monitorPerformance({
    pageId: 'page_0001', // 页面唯一标示
    url: 'http://127.0.0.1:8000/api', // 信息采集上报地址
    isPage: true, // 是否上报页面性能数据，默认true
    isResource: true, // 是否上报页面资源数据，默认true
    isRNetworkSpeed: true, // 是否需要上报网速，默认false
    isRScript: true, // 资源数据细分，是否上报，默认true
    isRCSS: true, // 资源数据细分，是否上报CSS数据，默认true
    isRFetch: true, // 资源数据细分，是否上报Fetch数据，默认true
    isRXHR: true, // 资源数据细分，是否上报XHR数据，默认true
    isRLink: true, // 资源数据细分，是否上报Link，默认true
    isRIMG: true, // 资源数据细分，是否上报IMG数据，默认true
    // 扩展信息，一般用于数据数据持久化区分
    extendsInfo: {
      getDynamic: () => {
        return {
          filterTow: () => {
            return {
              aaa: 123,
            }
          },
        }
      },
    },
  })
}
