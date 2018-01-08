<template>
  <div>
  <!--待办清单 部分-->
    <div class="container lists">
      <div class="lists-header">
        <p>
          待办清单
          <span class="badge">{{ listNumber }}</span>
          <button class="btn btn-default" data-toggle="modal" data-target="#ListCreateModal">创建</button>
          <button class="btn btn-default" @click="ListDelShow.open = !ListDelShow.open;ListDelShow.content=OpenOrClose(ListDelShow.content);" v-text="ListDelShow.content"></button>
          <button class="btn btn-default pull-right" @click="ListShow.open = !ListShow.open;ListShow.content=OpenOrClose(ListShow.content);" v-text="ListShow.content"></button>
        </p>
      </div>
      <div v-show="ListShow.open">
        <div class="col-md-3 col-sm-6" v-for="item in list">
          <div class="text-center" >
            <button class="btn btn-danger" v-show="ListDelShow.open" @click="delList(item.id,item.name)">删除</button>
            <span class="label label-info">{{ item.family }}</span>
            {{ item.name }}
            <button class="btn btn-default" @click="finishList(item.id)">完成</button>
          </div>
        </div> 
      </div>
    </div>

    <!--待办任务创建-->
    <div class="modal fade" id="ListCreateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" >创建新的任务</h4>
          </div>
          <div class="modal-body">
            <form v-model="listCreate">
              <div class="form-group">
                <label for="name">名称</label>
                <input v-model="listCreate.name" type="text" class="form-control" placeholder="请输入任务名称">
              </div>
              <div class="form-group">
                <label for="family">分类</label>
                <input v-model="listCreate.family" type="text" class="form-control" placeholder="请输入任务分类">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createList">确认</button>
          </div>
        </div>
      </div>
    </div>
    <!--待办任务创建 结束-->
    <!--待办清单 部分结束-->

    <!--记忆项目 部分-->
    <div class="container lists">
  <div class="lists-header">
    <p>
      记忆项目
      <span class="badge">{{ memoryNumber }}</span>
      <button class="btn btn-default" type="submit" data-toggle="modal" data-target="#MemoryCreateModal">创建</button>
      <button class="btn btn-default" @click="MemoryDelShow.open = !MemoryDelShow.open;MemoryDelShow.content=OpenOrClose(MemoryDelShow.content);" v-text="MemoryDelShow.content"></button>
      <button class="btn btn-default" @click="MemorySearchShow.open = !MemorySearchShow.open;MemorySearchShow.content=OpenOrClose(MemorySearchShow.content);" v-text="MemorySearchShow.content"></button>
      <button class="btn btn-default pull-right" @click="MemoryShow.open = !MemoryShow.open;MemoryShow.content=OpenOrClose(MemoryShow.content)" v-text="MemoryShow.content"></button>
    </p>
  </div>
  <div v-show="MemorySearchShow.open">
     <form v-model="memorySearch">
        <div class="form-group">
          <label for="name">名称</label>
          <input v-model="memorySearch.name" type="text" class="form-control" placeholder="请输入查找名称">
        </div>
        <div class="form-group">
          <label for="类别">类别</label>
          <input v-model="memorySearch.family" type="url" class="form-control" placeholder="请输入查找类别">
        </div>
      </form>
      <button type="button" class="btn btn-primary" @click="searchMemoriesContent">搜索</button>
  </div>
  <div v-show="MemoryShow.open">
    <div class="col-md-3 col-xs-12 memories-item" v-for="item in memory">
      
      <div v-if="item.type === '图片'">
      <h3 class="list-group-item-heading" >
        <button class="btn btn-danger" v-show="MemoryDelShow.open" @click="delMemory(item.id,item.name)">删除</button>
        {{ item.name }}
        <span class="label label-info">{{ item.family }}</span>
      </h3>
      <img id="memories-pics" class="list-group-item-text" :src="'http://otoibqemc.bkt.clouddn.com/memories/'+item.content+'.jpg-sim'">
      <button class="btn btn-default pull-right" @click="restoreMemory(item.id)">重置</button>
      <button class="btn btn-default pull-right" @click="remeberMemory(item.id,item.recall_style)">Next:{{ item.recall_style }}</button>
      </div>

      <div v-else-if="item.type === '链接'">
        <button class="btn btn-danger" v-show="MemoryDelShow.open" @click="delMemory(item.id,item.name)">删除</button>
        <a class="list-group-item-text" :href=item.content><h3 class="list-group-item-heading" >{{ item.name }}</h3></a>
        <span class="label label-info">{{ item.family }}</span>
        <button class="btn btn-default pull-right" @click="restoreMemory(item.id)">重置</button>
        <button class="btn btn-default pull-right" @click="remeberMemory(item.id,item.recall_style)">Next:{{ item.recall_style }}</button>
      </div>

      <div v-else>
        <h3 class="list-group-item-heading" >
          <button class="btn btn-danger" v-show="MemoryDelShow.open" @click="delMemory(item.id,item.name)">删除</button>
          {{ item.name }}
          <span class="label label-info">{{ item.family }}</span>
        </h3>
        <p class="list-group-item-text">{{ item.content }}</p>
        <button class="btn btn-default pull-right" @click="restoreMemory(item.id)">重置</button>
        <button class="btn btn-default pull-right" @click="remeberMemory(item.id,item.recall_style)">Next:{{ item.recall_style }}</button>
      </div>
    </div>
    <center><button class="btn btn-primary" @click="getMoreMemoriesContent" v-show="getMoreMemoriesShow">加载更多</button></center>
  </div>
</div>

<!--记忆项目创建-->
    <div class="modal fade" id="MemoryCreateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" >创建新的记忆项目</h4>
          </div>
          <div class="modal-body">
            <form v-model="memoryCreate">
              <div class="form-group">
                <label for="name">名称</label>
                <input v-model="memoryCreate.name" type="text" class="form-control" placeholder="请输入项目名称">
              </div>
              <div class="form-group">
                <label for="content">内容</label>
                <input v-model="memoryCreate.content" type="url" class="form-control" placeholder="请输入项目内容">
              </div>
              <div class="form-group">
                <label for="family">分类</label>
                <input v-model="memoryCreate.family" type="text" class="form-control" placeholder="请输入项目分类">
              </div>
              <div class="form-group">
                <label for="type">属性</label>
                <input v-model="memoryCreate.type" type="text" class="form-control" placeholder="请输入项目类型">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createMemory">确认</button>
          </div>
        </div>
      </div>
    </div>
    <!--记忆项目创建 结束-->
    <!--记忆项目 部分结束-->

    <!--常用链接 部分-->
    <div class="container lists">
      <div class="lists-header">
        <p>
          常用链接
          <button class="btn btn-default" data-toggle="modal" data-target="#LinkCreateModal">新建</button>
          <button class="btn btn-default" @click="LinkDelShow.open = !LinkDelShow.open;LinkDelShow.content=OpenOrClose(LinkDelShow.content);" v-text="LinkDelShow.content"></button>
          <button class="btn btn-default pull-right" @click="LinkShow.open = !LinkShow.open;LinkShow.content=OpenOrClose(LinkShow.content);" v-text="LinkShow.content"></button></p>
        <div v-show="LinkShow.open">
          <div class="col-md-4 col-xs-6" v-for="item in link">
           <button class="btn btn-danger" v-show="LinkDelShow.open" @click="delLink(item.id,item.name)">删除</button>
            <a class="text-center" :href="item.href">{{ item.name }}</a>
           </div>
        </div>
      </div>
    </div>

    <!--常用链接创建-->
    <div class="modal fade" id="LinkCreateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" >创建新的常用链接</h4>
          </div>
          <div class="modal-body">
            <form v-model="linkCreate">
              <div class="form-group">
                <label for="name">名称</label>
                <input v-model="linkCreate.name" type="text" class="form-control" placeholder="请输入链接名称">
              </div>
              <div class="form-group">
                <label for="href">地址</label>
                <input v-model="linkCreate.href" type="url" class="form-control" placeholder="请输入链接地址">
              </div>
              <div class="form-group">
                <label for="family">分类</label>
                <input v-model="linkCreate.family" type="text" class="form-control" placeholder="请输入链接分类">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createLink">确认</button>
          </div>
        </div>
      </div>
    </div>
    <!--常用链接创建 结束-->


  </div>
</div>


    <!--常用链接 部分结束-->
  </div>
</template>

<script>
import {GetLinks, CreateLink, DelLink, GetLists, CreateList, FinishList, DelList, GetMemories, CreateMemory, RememberMemory, FinishMemory, DelMemory, RestoreMemory} from '../api/api'
// 引用工具文件
import utils from '../utils/index.js'
export default {
  data () {
    return {
      memories: {
        page: 1,
        name: '',
        family: ''
      },
      ListShow: {open: true, content: '折叠'},
      LinkShow: {open: true, content: '折叠'},
      MemoryShow: {open: true, content: '折叠'},
      LinkDelShow: {open: false, content: '删除'},
      ListDelShow: {open: false, content: '删除'},
      MemoryDelShow: {open: false, content: '删除'},
      MemorySearchShow: {open: false, content: '检索'},
      getMoreMemoriesShow: false,
      linkCreate: {
        name: '',
        href: '',
        family: ''
      },
      listCreate: {
        name: '',
        family: ''
      },
      memoryCreate: {
        name: '',
        content: '',
        family: '',
        type: ''
      },
      memorySearch: {
        name: '',
        family: ''
      },
      list: [],
      listNumber: 0,
      memory: [],
      memoryNumber: 0,
      link: []
    }
  },
  methods: {
    OpenOrClose: function (str) {
      if (str === '打开') { return '折叠' }
      if (str === '折叠') { return '打开' }
      if (str === '删除') { return '取消' }
      if (str === '取消') { return '删除' }
      if (str === '检索') { return '收起' }
      if (str === '收起') { return '检索' }
    },
    getLinksContent: function () {
      GetLinks().then((res) => {
        this.link = res.data.links
      })
    },
    createLink: function () {
      let para = Object.assign({}, this.linkCreate)
      CreateLink(para).then((res) => {
        console.log(res.data)
        this.linkCreate = {name: '', href: '', family: ''}
        this.getLinksContent()
      })
    },
    delLink: function (id, name) {
      let r = confirm('确认删除' + name + '吗？')
      if (r === true) {
        let para = {
          id: id
        }
        DelLink(para).then((res) => {
          console.log(res.data)
          this.getLinksContent()
        })
      }
    },
    getListsContent: function () {
      GetLists().then((res) => {
        this.list = res.data.lists
        this.listNumber = res.data.number
      })
    },
    createList: function () {
      let para = Object.assign({}, this.listCreate)
      CreateList(para).then((res) => {
        console.log(res.data)
        this.listCreate = {name: '', family: ''}
        this.getListsContent()
      })
    },
    finishList: function (id) {
      let para = {
        id: id
      }
      FinishList(para).then((res) => {
        console.log(res.data)
        this.getListsContent()
      })
    },
    delList: function (id, name) {
      let r = confirm('确认删除' + name + '吗？')
      if (r === true) {
        let para = {
          id: id
        }
        DelList(para).then((res) => {
          console.log(res.data)
          this.getListsContent()
        })
      }
    },
    getMemoriesContent: function () {
      let para = {
        page: this.memories.page,
        name: this.memories.name,
        family: this.memories.family
      }
      GetMemories(para).then((res) => {
        this.memory = res.data.memories
        this.memoryNumber = res.data.number
        if (this.memoryNumber > 10) {
          this.getMoreMemoriesShow = true
        } else {
          this.getMoreMemoriesShow = false
        }
      })
    },
    searchMemoriesContent: function () {
      this.memories.page = 1
      this.memories.name = this.memorySearch.name
      this.memories.family = this.memorySearch.family
      this.getMemoriesContent()
    },
    getMoreMemoriesContent: function (page) {
      this.memories.page ++
      let para = {
        page: this.memories.page,
        name: this.memories.name,
        family: this.memories.family
      }
      GetMemories(para).then((res) => {
        this.memory = res.data.memories
        this.memoryNumber = res.data.number
      })
    },
    createMemory: function () {
      let para = Object.assign({}, this.memoryCreate)
      CreateMemory(para).then((res) => {
        console.log(res.data)
        this.memoryCreate = {name: '', content: '', family: '', type: ''}
        this.getMemoriesContent()
      })
    },
    finishMemory: function (id) {
      let para = {
        id: id
      }
      FinishMemory(para).then((res) => {
        console.log(res.data)
        this.getMemoriesContent()
      })
    },
    remeberMemory: function (id, style) {
      if (style === 'Finish') {
        this.finishMemory(id)
      } else {
        let recall = utils.recall(style)
        let para = {
          id: id,
          recall_style: recall.style,
          recall_time: recall.time
        }
        RememberMemory(para).then((res) => {
          console.log(res.data)
          this.getMemoriesContent()
        })
      }
    },
    restoreMemory: function (id) {
      let r = confirm('确认重置' + name + '吗？')
      if (r === true) {
        let para = {
          id: id
        }
        RestoreMemory(para).then((res) => {
          console.log(res.data)
          this.getMemoriesContent()
        })
      }
    },
    delMemory: function (id, name) {
      let r = confirm('确认删除' + name + '吗？')
      if (r === true) {
        let para = {
          id: id
        }
        DelMemory(para).then((res) => {
          console.log(res.data)
          this.getMemoriesContent()
        })
      }
    }
  },
  mounted () {
    this.getLinksContent()
    this.getListsContent()
    this.getMemoriesContent()
  }
}
</script>

<style>
button{outline:none;}
.lists{border: 2px solid #f7f7f7;margin-bottom: 20px;font-size: 20px;}
.lists span{margin:0 5px;}
.lists-header{margin-top: 10px;}
.memories-item{border: 2px solid #f7f7f7;}
.memories-item h3,.memories-item p{margin: 3%;}
#memories-pics{width: 100%;}
</style>

