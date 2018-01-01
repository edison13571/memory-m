import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers, Lists, Links, Memories} from './data'
import utils from '../utils/index.js'
let _Lists = Lists
let _Links = Links
let _Memories = Memories

export default {
    /**
     * mock bootstrap
     */
  bootstrap () {
    let mock = new MockAdapter(axios)

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

      // 登录
    mock.onGet('/logincheck').reply(config => {
      let {name, password} = config.params
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === name && u.password === password) {
              user = u.username
              return true
            }
          })

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }])
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }])
          }
        }, 1000)
      })
    })

    // 获取任务清单
    mock.onGet('/lists').reply(config => {
      let mockLists = _Lists.filter(u => {
        if (u.finish === null) {
          return true
        }
      })
      let mockNumber = mockLists.length
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            lists: mockLists,
            number: mockNumber
          }])
        }, 100)
      })
    })

    // 创建任务清单
    mock.onGet('/lists/create').reply(config => {
      let { name, family } = config.params
      _Lists.push({
        name: name,
        family: family,
        finish: null
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 100)
      })
    })

    // 完成任务
    mock.onGet('/listsfinish').reply(config => {
      let { id } = config.params
      _Lists.some(u => {
        if (u.id === id) {
          u.finish = 'finish'
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '完成成功'
          }])
        }, 100)
      })
    })

    // 删除任务
    mock.onGet('/listsdel').reply(config => {
      let { id } = config.params
      _Lists = _Lists.filter(u => u.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 100)
      })
    })

    // 获取链接
    mock.onGet('/links').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            links: _Links
          }])
        }, 100)
      })
    })

    // 创建链接
    mock.onGet('/links/create').reply(config => {
      let { name, href, family } = config.params
      _Links.push({
        name: name,
        href: href,
        family: family
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 100)
      })
    })

    // 删除链接
    mock.onGet('/linksdel').reply(config => {
      let { id } = config.params
      _Links = _Links.filter(u => u.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 100)
      })
    })

    // 获取记忆项目清单
    mock.onGet('/memories').reply(config => {
      let time = utils.formatDateTime(new Date())
      let mockMemories = _Memories.filter(u => {
        if (u.finish === null && u.recall_time < time) {
          return true
        }
      })
      let mockNumber = mockMemories.length
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            memories: mockMemories,
            number: mockNumber
          }])
        }, 100)
      })
    })

    // 创建记忆项目
    mock.onGet('/memories/create').reply(config => {
      let { name, content, family, type } = config.params
      _Memories.push({
        name: name,
        content: content,
        family: family,
        type: type,
        recall_style: '30Min',
        finish: null
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 100)
      })
    })

    // 记忆记忆项目
    mock.onGet('/memoriesremember').reply(config => {
      let { id, recall_style, recall_time } = config.params
      _Memories.some(u => {
        if (u.id === id) {
          u.recall_style = recall_style
          u.recall_time = recall_time
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '记忆成功'
          }])
        }, 100)
      })
    })

    // 完成记忆项目
    mock.onGet('/memoriesfinish').reply(config => {
      let { id } = config.params
      _Memories.some(u => {
        if (u.id === id) {
          u.finish = 'finish'
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '完成成功'
          }])
        }, 100)
      })
    })

    // 删除记忆项目
    mock.onGet('/memoriesdel').reply(config => {
      let { id } = config.params
      _Memories = _Memories.filter(u => u.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 100)
      })
    })
  }
}
