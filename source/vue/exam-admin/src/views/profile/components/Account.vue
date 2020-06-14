<template>
  <el-form>
    <el-form-item label="真实姓名">
      <el-input v-model.trim="userInfo.realName" />
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model.trim="userInfo.phone" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">更新</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import userApi from '@/api/user'
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {
          realName: '',
          phone: ''
        }
      }
    }
  },
  methods: {
    submit () {
      let _this = this
      userApi.updateUser(this.userInfo).then(re => {
        if (re.code === 1) {
          _this.$message.success(re.message)
        } else {
          _this.$message.error(re.message)
        }
      })
    }
  }
}
</script>
