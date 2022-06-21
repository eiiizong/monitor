import axios from 'axios'
/**
 * 数据持久化
 */
class API {
  constructor(url) {
    this.url = url
  }

  /**
   * 上报信息 （默认方式）
   * isAxios ：是否优先通过axios上报
   */
  report(data, isAxios) {
    if (!this.checkUrl(this.url)) {
      console.log('monitorjs 上报信息url地址格式不正确,url=', this.url)
      return
    }
    this.sendInfo(data, isAxios)
  }

  /**
   * 发送消息
   */
  sendInfo(data, isAxios) {
    data = JSON.stringify(data)
    try {
      if (axios && isAxios) {
        axios({
          method: 'post',
          url: this.url,
          data,
          timeout: 60 * 1000,
        }).catch((err) => {
          console.error('monitorjs axios post请求异常', err)
        })
        return
      }
    } catch (err) {
      console.error('monitorjs axios异常', err)
    }
    try {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', this.url, true)
      //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(data)
    } catch (err) {
      console.error('monitorjs axios异常', err)
    }
  }

  /**
   * 通过img方式上报信息
   */
  reportByImg(data) {
    if (!this.checkUrl(this.url)) {
      console.error(
        'monitorjs通过img方式上报，上报信息url地址格式不正确，url=',
        this.url
      )
      return
    }
    try {
      var img = new Image()
      img.src =
        this.url + '?v=' + new Date().getTime() + '&' + this.formatParams(data)
    } catch (err) {
      console.error('monitorjs通过img方式上报，catch 捕获错误', err)
    }
  }

  /**
   * sendBeacon上报
   */
  reportByNavigator(data) {
    navigator.sendBeacon && navigator.sendBeacon(this.url, data)
  }

  /*
   *格式化参数
   */
  formatParams(data) {
    var arr = []
    for (var name in data) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
  }

  /**
   * 检测URL
   */
  checkUrl(url) {
    if (!url) {
      return false
    }
    var urlRule = /^[hH][tT][tT][pP]([sS]?):\/\//
    return urlRule.test(url)
  }
}
export default API
