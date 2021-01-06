<template>
  <div class="app-container">

    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="Username："  prop="userName" required>
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="Password："  required>
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="Name：" prop="realName" required>
        <el-input v-model="form.realName"></el-input>
      </el-form-item>
      <el-form-item label="Age：">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="Gender：">
        <el-select v-model="form.sex" placeholder="Gender" clearable>
          <el-option v-for="item in sexEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Birthday：">
        <el-date-picker v-model="form.birthDay" type="date" value-format="yyyy-MM-dd" placeholder="Option date" />
      </el-form-item>
      <el-form-item label="Phone：">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <!--<el-form-item label="年级：" prop="userLevel" required>
        <el-select v-model="form.userLevel" placeholder="年级">
          <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>-->
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
        role: 1,
        status: 1,
        age: '',
        sex: '',
        birthDay: null,
        phone: null,
        userLevel: '1'
      },
      formLoading: false,
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        userLevel: [
          { required: true, message: '请选择年级', trigger: 'change' }
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
                _this.$router.push('/user/student/list')
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
      this.$refs['form'].resetFields()
      this.form = {
        id: null,
        userName: '',
        password: '',
        realName: '',
        role: 1,
        status: 1,
        age: '',
        sex: '',
        birthDay: null,
        phone: null,
        userLevel: '1'
      }
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
      statusEnum: state => state.user.statusEnum,
      levelEnum: state => state.user.levelEnum
    })
  }
}
</script>
