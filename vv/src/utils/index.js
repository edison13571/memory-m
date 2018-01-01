export default {
  formatDateTime (date) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    let minute = date.getMinutes()
    minute = minute < 10 ? ('0' + minute) : minute
    let seconds = date.getSeconds()
    seconds = seconds < 10 ? ('0' + seconds) : seconds
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + seconds
  },
  recall (style) {
    let newstyle, newtime
    switch (style) {
      case '30Min':
        newstyle = '1Hr'
        newtime = 30 * 60 * 1000
        break
      case '1Hr':
        newstyle = '8Hr'
        newtime = 60 * 60 * 1000
        break
      case '8Hr':
        newstyle = '1Day'
        newtime = 8 * 60 * 60 * 1000
        break
      case '1Day':
        newstyle = '2Days'
        newtime = 24 * 60 * 60 * 1000
        break
      case '2Days':
        newstyle = '3Days'
        newtime = 2 * 24 * 60 * 60 * 1000
        break
      case '3Days':
        newstyle = '7Days'
        newtime = 3 * 24 * 60 * 60 * 1000
        break
      case '7Days':
        newstyle = '2weeks'
        newtime = 7 * 24 * 60 * 60 * 1000
        break
      case '2weeks':
        newstyle = '1Month'
        newtime = 14 * 24 * 60 * 60 * 1000
        break
      case '1Month':
        newstyle = '3Months'
        newtime = 30 * 24 * 60 * 60 * 1000
        break
      case '3Months':
        newstyle = '6Months'
        newtime = 3 * 30 * 24 * 60 * 60 * 1000
        break
      case '6Months':
        newstyle = '1Year'
        newtime = 6 * 30 * 24 * 60 * 60 * 1000
        break
      case '1Year':
        newstyle = 'Finish'
        newtime = 12 * 30 * 24 * 60 * 60 * 1000
        break
    }
    let time = Date.parse(new Date())
    time = new Date(time + newtime)
    time = this.formatDateTime(time)
    return {style: newstyle, time: time}
  }
}
