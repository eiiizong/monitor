const defaultConfig = {
  // 网速上报定时间隔 单位 ms
  networkSpeed: {
    timeInterval: 1000 * 60 * 1, // 上报定时间隔 单位 ms
    filePath: 'https://file.40017.cn/tcservice/common/imags/network_speed.png', // 测试图片地址
    downloadSize: 241797, // 测试图片大小 bytes
  },
}

export default defaultConfig
