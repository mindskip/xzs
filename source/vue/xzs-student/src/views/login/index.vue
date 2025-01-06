<template>
  <div class="lowin  lowin-blue">
    <div class="lowin-brand">
      <img src="@/assets/logo2.png" alt="logo" style="margin-top: 12px">
    </div>
    <div class="lowin-wrapper">
      <div class="lowin-box lowin-login">
        <div class="lowin-box-inner">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
            <p>学之思开源考试系统</p>
            <div class="lowin-group">
              <label>用户名 </label>
              <el-input ref="userName" v-model="loginForm.userName" class="lowin-input" placeholder="用户名" name="userName" type="text" tabindex="1" auto-complete="on"/>
            </div>
            <div class="lowin-group password-group">
              <label>密码 <a href="#" class="forgot-link">忘记密码?</a></label>
              <el-input  class="lowin-input" :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
                placeholder="密码" name="password" tabindex="2" auto-complete="on" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin"/>
            </div>

            <el-button :loading="loading" type="text" class="lowin-btn login-btn"  @click.native.prevent="handleLogin">登录</el-button>

            <div class="text-foot">
              还没有账号?
              <router-link to="/register" class="register-link">
                注册
              </router-link>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div class="account-foot-copyright">
      <span>Copyright ©2019-2025 武汉思维跳跃科技有限公司 版权所有</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import loginApi from '@/api/login'

export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('用户名不能少于5个字符'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能少于5个字符'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userName: '',
        password: '',
        remember: false
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false
    }
  },
  created () {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted () {
    if (this.loginForm.userName === '') {
      this.$refs.userName.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed () {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock ({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        // eslint-disable-next-line no-mixed-operators
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      let _this = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          loginApi.login(this.loginForm).then(function (result) {
            if (result && result.code === 1) {
              _this.setUserName(_this.loginForm.userName)
              _this.$router.push({ path: '/' })
            } else {
              _this.loading = false
              _this.$message.error(result.message)
            }
          }).catch(function (reason) {
            _this.loading = false
          })
        } else {
          return false
        }
      })
    },
    ...mapMutations('user', ['setUserName'])
  }
}
</script>

<style lang="scss">
  .lowin-input{
    .el-input__inner{
      background-color: transparent !important;
      border: 0px !important;
    }
  }
</style>

<style scoped>

  .lowin {
    /* variables */
    --color-primary: #44a0b3;
    --color-grey: rgba(68, 160, 179, .06);
    --color-dark: rgba(68, 160, 179, .5);
    --color-semidark: rgba(68, 160, 179, .5);

    text-align: center;
    margin: 60px 0 0 0;
    font-family: 'Segoe UI';
    font-size: 14px;
  }

  .lowin .lowin-wrapper {
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    position: relative;
    height: 100%;
    width: 360px;
    margin: 0 auto;
  }

  .lowin.lowin-blue {
    --color-primary: #0081C6;
    --color-grey: rgba(0, 129, 198, .05);
    --color-dark: rgba(0, 129, 198, .7);
    --color-semidark: rgba(0, 129, 198, .45);
  }

  .lowin a {
    color: var(--color-primary);
    text-decoration: none;
    border-bottom: 1px dashed var(--color-semidark);
    margin-top: -3px;
    padding-bottom: 2px;
  }

  .lowin * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .lowin .lowin-brand {
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 0 auto -50px auto;
    border-radius: 50%;
    -webkit-box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
    box-shadow: 0 4px 40px rgba(0, 0, 0, .07);
    padding: 10px;
    background-color: #fff;
    z-index: 1;
    position: relative;
  }

  .lowin .lowin-brand img {
    width: 100%;
  }

  .lowin .lowin-box {
    width: 100%;
    position: absolute;
    left: 0;
  }

  .lowin .lowin-box-inner {
    background-color: #fff;
    -webkit-box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
    box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
    padding: 60px 25px 25px 25px;
    text-align: left;
    border-radius: 3px;
  }

  .lowin .lowin-box::after {
    content: ' ';
    -webkit-box-shadow: 0 0 25px rgba(0, 0, 0, .1);
    box-shadow: 0 0 25px rgba(0, 0, 0, .1);
    -webkit-transform: translate(0, -92.6%) scale(.88);
    -ms-transform: translate(0, -92.6%) scale(.88);
    transform: translate(0, -92.6%) scale(.88);
    border-radius: 3px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: -1;
  }

  .lowin .lowin-box.lowin-flip {
    -webkit-transform: rotate3d(0, 1, 0, -180deg);
    transform: rotate3d(0, 1, 0, -180deg);
    display: none;
    opacity: 0;
  }

  .lowin .lowin-box p {
    color: var(--color-semidark);
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  .lowin .lowin-box .lowin-group {
    margin-bottom: 30px;
  }

  .lowin .lowin-box label {
    margin-bottom: 5px;
    display: inline-block;
    width: 100%;
    color: var(--color-semidark);
    font-weight: 700;
  }

  .lowin .lowin-box label a {
    float: right;
  }

  .lowin .lowin-box .lowin-input {
    background-color: var(--color-grey);
    color: var(--color-dark);
    border: none;
    border-radius: 3px;
    padding: 5px 20px;
    width: 100%;
    outline: 0;
  }

  .lowin .lowin-box .lowin-btn {
    display: inline-block;
    width: 100%;
    border: none;
    color: #fff;
    padding: 15px;
    border-radius: 3px;
    background-color: var(--color-primary);
    -webkit-box-shadow: 0 2px 7px var(--color-semidark);
    box-shadow: 0 2px 7px var(--color-semidark);
    font-weight: 700;
    outline: 0;
    cursor: pointer;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }

  .lowin .lowin-box .lowin-btn:active {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .lowin .lowin-box .lowin-btn:hover {
    opacity: .9;
  }

  .lowin .text-foot {
    text-align: center;
    padding: 10px;
    font-weight: 700;
    margin-top: 20px;
    color: var(--color-semidark);
  }

  /* animation */
  .lowin .lowin-box.lowin-animated {
    -webkit-animation-name: LowinAnimated;
    animation-name: LowinAnimated;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .lowin .lowin-box.lowin-animatedback {
    -webkit-animation-name: LowinAnimatedBack;
    animation-name: LowinAnimatedBack;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .lowin .lowin-box.lowin-animated-flip {
    -webkit-animation-name: LowinAnimatedFlip;
    animation-name: LowinAnimatedFlip;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .lowin .lowin-box.lowin-animated-flipback {
    -webkit-animation-name: LowinAnimatedFlipBack;
    animation-name: LowinAnimatedFlipBack;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .lowin .lowin-brand.lowin-animated {
    -webkit-animation-name: LowinBrandAnimated;
    animation-name: LowinBrandAnimated;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .lowin .lowin-group.password-group {
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }

  .lowin .lowin-group.password-group.lowin-animated {
    -webkit-animation-name: LowinPasswordAnimated;
    animation-name: LowinPasswordAnimated;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  .lowin .lowin-group.password-group.lowin-animated-back {
    -webkit-animation-name: LowinPasswordAnimatedBack;
    animation-name: LowinPasswordAnimatedBack;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  @media screen and (max-width: 320px) {
    .lowin .lowin-wrapper {
      width: 100%;
    }
    .lowin .lowin-box {
      padding: 0 10px;
    }
  }
</style>
