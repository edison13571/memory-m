<template>
<div>
    <Header></Header>
    <div class="container-fluid">
            <div class="login-bg row" style="background:url('http://otoibqemc.bkt.clouddn.com/andre-benz-257878.jpg-sim');background-position:center;">
                <div class="col-md-3 login-lr"></div>
                <div class="col-md-6">
                    <div class="login-login">  
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">登录</h3>
                            </div>
                            <div class="panel-body">
                            <form class="form-signin" v-model="user">                   
                                <label for="username" class="sr-only">Email address</label>
                                <input type="text" id="inputUsername" class="form-control" placeholder="用户名" required autofocus v-model="user.name">
                                <label for="inputPassword" class="sr-only">Password</label>
                                <input type="password" id="inputPassword" class="form-control" placeholder="密码" required v-model="user.password">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me">记住我
                                    </label>
                                </div>
                                <button class="btn btn-lg btn-primary btn-block" @click="login">登录</button>
                            </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    <Footer></Footer>
    </div>
</template>
<script>
import {UserLogin} from '../api/api'
// 引用工具文件
// import utils from '../utils/index.js'
export default {
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      let para = Object.assign({}, this.user)
      UserLogin(para).then((res) => {
        if (res.data.code === 200) {
          sessionStorage.setItem('user', res.data.user)
          this.manageShow = true
          this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style>
    /* login */
.login-bg{background-repeat: no-repeat;min-height: 720px;}
.login-login{background: white;width:400px;border-radius: 10px;margin: 30% auto;opacity: 0.9;}
#inputPassword{margin-top: 10px;}
#inputUsername{margin-top: 30px;}
</style>