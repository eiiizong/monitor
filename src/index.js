import MonitorJS from './monitorjs.js'

// 测试
const monitorjs = new MonitorJS()
monitorjs.monitorPerformance({
  pageId: 'page_0001', //页面唯一标示
  url: 'http://127.0.0.1:9090', //信息采集上报地址
  isPage: true, // 是否上报页面性能数据，默认true
  isResource: true, // 是否上报页面资源数据，默认true
  isRNetworkSpeed: true, // 是否需要上报网速，默认false
  isRScript: false, // 资源数据细分，是否上报，默认true
  isRCSS: false, // 资源数据细分，是否上报CSS数据，默认true
  isRFetch: false, // 资源数据细分，是否上报Fetch数据，默认true
  isRXHR: false, // 资源数据细分，是否上报XHR数据，默认true
  isRLink: false, // 资源数据细分，是否上报Link，默认true
  isRIMG: false, // 资源数据细分，是否上报IMG数据，默认true
  // 扩展信息，一般用于数据数据持久化区分
  extendsInfo: {
    module: '项目',
    filterOne: 'page_0001',
    getDynamic: () => {
      return {
        filterTow: () => {},
      }
    },
  },
})

export { MonitorJS }

window.MonitorJS = MonitorJS
