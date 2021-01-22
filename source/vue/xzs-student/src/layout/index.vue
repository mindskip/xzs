<template>
  <el-container>
    <el-header height="61" class="student-header">
      <div class="head-user">
        <el-dropdown trigger="click" placement="bottom">
          <el-badge :is-dot="messageCount!==0" >
            <el-avatar  class="el-dropdown-avatar" size="medium"  :src="userInfo.imagePath === null ? require('@/assets/avatar.png') : userInfo.imagePath"></el-avatar>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push({path:'/user/index'})">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="$router.push({path:'/user/message'})">
              <el-badge :value="messageCount" v-if="messageCount!==0">
                <span>消息中心</span>
              </el-badge>
              <span  v-if="messageCount===0">消息中心</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-menu class="el-menu-title" mode="horizontal" :default-active="defaultUrl" :router="true">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/paper/index">试卷中心</el-menu-item>
        <el-menu-item index="/record/index">考试记录</el-menu-item>
        <el-menu-item index="/question/index">错题本</el-menu-item>
      </el-menu>
      <div>
        <a href="/"><img src="@/assets/logo.png" height="56"/></a>
      </div>
    </el-header>
    <el-main class="student-main">
      <router-view/>
    </el-main>
    <el-footer height="340" class="student-footer">
      <div class="container">
        <div class="footer-main">
          <h4>产品介绍</h4>
          <a href="http://www.mindskip.net/sdd.html" target="_blank" class="footer-main-link">思多多智能考试平台</a>
          <a href="http://www.mindskip.net/wdd.html" target="_blank" class="footer-main-link">维多多培训考试系统</a>
          <a href="http://www.mindskip.net/xdd.html" target="_blank" class="footer-main-link">学多多考试系统</a>
          <a href="http://www.mindskip.net/xzs.html" target="_blank" class="footer-main-link">学之思考试系统</a>
        </div>
        <div class="footer-main">
          <h4>学多多小程序</h4>
          <img src="@/assets/code/1.jpg" style="width: 100px;height: 100px;"/>
        </div>
        <div class="footer-main">
          <h4>跃考 H5、小程序</h4>
          <img src="@/assets/code/2.png" style="width: 100px;height: 100px;"/>
          <img src="@/assets/code/3.jpg" style="width: 100px;height: 100px;margin-left: 10px"/>
        </div>
        <div class="footer-main">
          <h4>维考 H5、小程序</h4>
          <img src="@/assets/code/6.png" style="width: 100px;height: 100px;"/>
          <img src="@/assets/code/7.jpg" style="width: 100px;height: 100px;margin-left: 10px"/>
        </div>
        <div class="footer-main">
          <h4>关于我们</h4>
          <img src="@/assets/4.jpg" style="width: 100px;height: 100px;"/>
        </div>
        <div class="footer-social">
          <p class="footer-social-title">开源社区</p>
          <a href="https://github.com/mindskip/xzs" target="_blank"> <svg-icon icon-class="social-github" style="width: 32px;height: 32px;" /></a>
          <a href="https://gitee.com/mindskip/uexam" target="_blank"><svg-icon icon-class="gitee" style="width: 32px;height: 32px;" /></a>
        </div>
      </div>
    </el-footer>
    <div class="foot-copyright">
      <span>Copyright © 2021 武汉思维跳跃科技有限公司 版权所有</span>
    </div>
  </el-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import loginApi from '@/api/login'
import userApi from '@/api/user'
export default {
  name: 'Layout',
  data () {
    return {
      defaultUrl: '/index',
      userInfo: {
        imagePath: null
      }
    }
  },
  created () {
    let _this = this
    this.defaultUrl = this.routeSelect(this.$route.path)
    this.getUserMessageInfo()
    userApi.getCurrentUser().then(re => {
      _this.userInfo = re.response
    })
  },
  watch: {
    $route (to, from) {
      this.defaultUrl = this.routeSelect(to.path)
    }
  },
  methods: {
    routeSelect (path) {
      let topPath = ['/', '/index', '/paper/index', '/record/index', '/question/index']
      if (topPath.indexOf(path)) {
        return path
      }
      return null
    },
    logout () {
      let _this = this
      loginApi.logout().then(function (result) {
        if (result && result.code === 1) {
          _this.clearLogin()
          _this.$router.push({ path: '/login' })
        }
      })
    },
    ...mapActions('user', ['getUserMessageInfo']),
    ...mapMutations('user', ['clearLogin'])
  },
  computed: {
    ...mapState('user', {
      messageCount: state => state.messageCount
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
