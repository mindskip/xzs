<template>
  <el-container>
    <el-header height="61" class="student-header">
      <div class="head-user">
        <el-dropdown trigger="click" placement="bottom">
          <el-badge :is-dot="messageCount!==0" >
            <el-avatar  class="el-dropdown-avatar" size="medium"  :src="require('@/assets/avatar.png')"></el-avatar>
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
        <img src="@/assets/logo.png" height="56"/>
      </div>
    </el-header>
    <el-main class="student-main">
      <router-view/>
    </el-main>
    <el-footer height="340" class="student-footer">
      <div class="container">
        <div class="footer-main">
          <h4>友情链接</h4>
          <a href="https://spring.io/" target="_blank" class="footer-main-link">Spring</a>
          <a href="https://cn.vuejs.org/" target="_blank" class="footer-main-link">Vue</a>
          <a href="https://element.eleme.io/" target="_blank" class="footer-main-link">Element</a>
          <a href="https://www.postgresql.org/" target="_blank" class="footer-main-link">Postgresql</a>
          <a href="https://redis.io/" target="_blank" class="footer-main-link">Redis</a>
          <a href="http://undertow.io/" target="_blank" class="footer-main-link">Undertow</a>
          <a href="http://nginx.org/" target="_blank" class="footer-main-link">Nginx</a>
        </div>
        <div class="footer-main">
          <h4>博客</h4>
          <a href="#" target="_blank" class="footer-main-link">在线讨论</a>
          <a href="https://www.google.com/" target="_blank" class="footer-main-link">Google</a>
          <a href="https://www.oschina.net/" target="_blank" class="footer-main-link">Oschina</a>
          <a href="https://www.infoq.cn/" target="_blank" class="footer-main-link">Infoq</a>
          <a href="https://www.iconfont.cn/" target="_blank" class="footer-main-link">Iconfont</a>
        </div>
        <div class="footer-social">
          <p class="footer-social-title">开源社区</p>
          <a href="https://github.com/alvis-u/exam" target="_blank"> <svg-icon icon-class="social-github" style="width: 32px;height: 32px;" /></a>
          <a href="https://gitee.com/alvis-yu/exam" target="_blank"><svg-icon icon-class="gitee" style="width: 32px;height: 32px;" /></a>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import loginApi from '@/api/login'
export default {
  name: 'Layout',
  data () {
    return {
      defaultUrl: '/index'
    }
  },
  created () {
    this.defaultUrl = this.routeSelect(this.$route.path)
    this.getUserMessageInfo()
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
