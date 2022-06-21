const defaultConfig = {
  // 网速上报定时间隔 单位 ms
  networkSpeed: {
    timeInterval: 1000 * 60 * 1, // 上报定时间隔 单位 ms
    filePath: 'https://file.40017.cn/tcservice/common/imags/network_speed.png', // 测试图片地址
    downloadSize: 241797, // 测试图片大小 bytes
  },
  // UV（Unique visitor）是指通过互联网访问、浏览这个网页的自然人。访问您网站的一台电脑客户端为一个访客。00:00-24:00内相同的客户端只被计算一次。一天内同个访客多次访问仅计算一个UV。
  // IP（Internet Protocol） 独立IP是指访问过某站点的IP总数，以用户的IP地址作为统计依据。00:00-24:00内相同IP地址之被计算一次。
  // UV与IP区别 如：你和你的家人用各自的账号在同一台电脑上登录新浪微博，则IP数+1，UV数+2。由于使用的是同一台电脑，所以IP不变，但使用的不同账号，所以UV+2
  // PV（Page View）即页面浏览量或点击量，用户每1次对网站中的每个网页访问均被记录1个PV。用户对同一页面的多次访问，访问量累计，用以衡量网站用户访问的网页数量。
  // VV（Visit View）用以统计所有访客1天内访问网站的次数。当访客完成所有浏览并最终关掉该网站的所有页面时便完成了一次访问，同一访客1天内可能有多次访问行为，访问次数累计
  // PV与VV区别 如：你今天10点钟打开了百度，访问了它的三个页面；11点钟又打开了百度，访问了它的两个页面，则PV数+5，VV数+2.PV是指页面的浏览次数，VV是指你访问网站的次数。
}

export default defaultConfig
