<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">memory-m</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="something">
        </div>
        <button type="submit" class="btn btn-default">百度搜索</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown" v-show="manageShow">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >管理中心<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><button class="btn btn-danger center-block" @click="logout">&nbsp &nbsp &nbsp &nbsp logout &nbsp &nbsp &nbsp &nbsp</button></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
  export default {
    data () {
      return {
        manageShow: true
      }
    },
    methods: {
      logout: function () {
        let r = confirm('确认退出登录吗？')
        if (r === true) {
          sessionStorage.removeItem('user')
          this.manageShow = false
          this.$router.push({ path: '/login' })
        }
      }
    }
  }
</script>