const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456'
  }
]

const Lists = [
  {
    id: 1,
    name: '制定新年计划',
    family: '工作',
    finish: null
  },
  {
    id: 2,
    name: '制定健身计划',
    family: '生活',
    finish: null
  }
]

const Links = [
  {
    id: 1,
    name: '百度',
    href: 'http://www.baidu.com',
    family: '常用'
  },
  {
    id: 2,
    name: '我的博客',
    href: 'http://www.edison13571.com',
    family: '常用'
  }
]

const Memories = [
  {
    id: 1,
    name: '语句知识点',
    content: '这是一个语句知识点，可以记录阅读中发现的句子，知识点',
    family: '点滴',
    type: '语句',
    recall_style: '30Min',
    recall_time: '2018-01-01 15:04:42',
    finish: null
  },
  {
    id: 2,
    name: '这是一个链接可以阅读你在网上看到的文章',
    content: 'http://news.cctv.com/2017/12/31/ARTInZQppbFSySLW0LaKsEME171231.shtml',
    family: '收藏',
    type: '链接',
    recall_style: '30Min',
    recall_time: '2018-01-01 15:00:42',
    finish: null
  },
  {
    id: 3,
    name: '我是一张图片,黑键=黑桃A',
    content: '黑桃A',
    family: '图像记忆',
    type: '图片',
    recall_style: '30Min',
    recall_time: '2018-01-01 15:00:42',
    finish: null
  }
]
export { LoginUsers, Lists, Links, Memories}
