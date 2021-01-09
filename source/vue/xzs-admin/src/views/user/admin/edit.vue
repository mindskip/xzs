<template>
  <div class="app-container">

    <el-form :model="form" ref="form" label-width="120px" v-loading="formLoading" :rules="rules">
      <el-form-item label="User name："  prop="userName" required>
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="Password：" required>
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="Name: " prop="realName"   required>
        <el-input v-model="form.realName"></el-input>
      </el-form-item>
      <el-form-item label="Age：">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="gender：">
        <el-select v-model="form.sex" placeholder="Gender" clearable>
          <el-option v-for="item in sexEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="BirthDay：">
        <el-date-picker v-model="form.birthDay" value-format="yyyy-MM-dd" type="date" placeholder="Option date"/>
      </el-form-item>
      <el-form-item label="Phone：">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="Status：" required>
        <el-select v-model="form.status" placeholder="Status">
          <el-option v-for="item in statusEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import userApi from '@/api/user'

export default {
  data () {
    return {
      form: {
        id: null,
        userName: '',
        password: '',
        realName: '',
        role: 3,
        status: 1,
        age: '',
        sex: '',
        birthDay: null,
        phone: null
      },
      formLoading: false,
      rules: {
        userName: [
          { required: true, message: 'Please enter the user name', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: 'Please enter your real name', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      userApi.selectUser(id).then(re => {
        _this.form = re.response
        _this.formLoading = false
      })
    }
  },
  methods: {
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          userApi.createUser(this.form).then(data => {
            if (data.code === 1) {
              _this.$message.success(data.message)
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/user/admin/list')
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
        id: null,
        userName: '',
        password: '',
        realName: '',
        role: 3,
        status: 1,
        age: '',
        sex: '',
        birthDay: null,
        phone: null
      }
      this.form = lastId
    },
    ...mapActions('tagsView', { delCurrentView: 'delCurrentView' })
  },
  computed: {
    ...mapGetters('enumItem', [
      'enumFormat'
    ]),
    ...mapState('enumItem', {
      sexEnum: state => state.user.sexEnum,
      roleEnum: state => state.user.roleEnum,
      statusEnum: state => state.user.statusEnum
    })
  }
}
</script>
