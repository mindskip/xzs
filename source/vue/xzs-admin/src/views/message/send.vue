<template>
  <div class="app-container">

    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="标题："  prop="title" required>
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容：" prop="content" required>
        <el-input type="textarea" rows="13"  v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="接收人：" required>
        <el-select v-model="form.receiveUserIds" multiple filterable remote reserve-keyword
          placeholder="请输入用户名"
          :remote-method="getUserByUserName"
          :loading="selectLoading">
          <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">发送</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import userApi from '@/api/user'
import messageApi from '@/api/message'

export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        receiveUserIds: []
      },
      formLoading: false,
      selectLoading: false,
      options: [],
      rules: {
        title: [
          { required: true, message: '请输入消息标题', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '请输入消息内容', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    getUserByUserName (query) {
      let _this = this
      if (query !== '') {
        _this.selectLoading = true
        userApi.selectByUserName(query).then(re => {
          _this.selectLoading = false
          _this.options = re.response
        })
      } else {
        _this.options = []
      }
    },
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          messageApi.send(this.form).then(data => {
            if (data.code === 1) {
              _this.$message.success(data.message)
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/message/list')
              })
            } else {
              _this.$message.error(data.message)
              _this.formLoading = false
            }
          }).catch(e => {
            _this.formLoading = false
          })
        } else {
          return false
        }
      })
    },
    resetForm () {
      let lastId = this.form.id
      this.$refs['form'].resetFields()
      this.form = {
        title: '',
        content: '',
        receiveUserIds: []
      }
      this.form.id = lastId
    },
    ...mapActions('tagsView', { delCurrentView: 'delCurrentView' })
  }
}
</script>
