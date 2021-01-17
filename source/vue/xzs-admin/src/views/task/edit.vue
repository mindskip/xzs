<template>
  <div class="app-container">

    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="年级：" prop="gradeLevel"  required>
        <el-select v-model="form.gradeLevel" placeholder="年级" @change="levelChange" >
          <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题："  prop="title" required>
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="试卷："  required>
        <el-table  :data="form.paperItems" border fit highlight-current-row style="width: 100%">
          <el-table-column prop="subjectId" label="学科" :formatter="subjectFormatter" width="120px" />
          <el-table-column prop="name" label="名称"  />
          <el-table-column prop="createTime" label="创建时间" width="160px"/>
          <el-table-column  label="操作" align="center"  width="160px">
            <template slot-scope="{row}">
              <el-button size="mini" type="danger" @click="removePaper(row)" class="link-left">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="addPaper">添加试卷</el-button>
      </el-form-item>
    </el-form>

    <el-dialog :visible.sync="paperPage.showDialog" width="70%">
      <el-form :model="paperPage.queryParam" ref="queryForm" :inline="true">
        <el-form-item label="学科：" >
          <el-select v-model="paperPage.queryParam.subjectId"  clearable>
            <el-option v-for="item in paperPage.subjectFilter" :key="item.id" :value="item.id" :label="item.name+' ( '+item.levelName+' )'"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="examPaperSubmitForm">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="paperPage.listLoading" :data="paperPage.tableData"
                @selection-change="handleSelectionChange" border fit highlight-current-row style="width: 100%">
        <el-table-column type="selection" width="35"></el-table-column>
        <el-table-column prop="id" label="Id" width="90px"/>
        <el-table-column prop="subjectId" label="学科" :formatter="subjectFormatter" width="120px" />
        <el-table-column prop="name" label="名称"  />
        <el-table-column prop="createTime" label="创建时间" width="160px"/>
      </el-table>
      <pagination v-show="paperPage.total>0" :total="paperPage.total"
                  :page.sync="paperPage.queryParam.pageIndex" :limit.sync="paperPage.queryParam.pageSize"
                  @pagination="search"/>
      <span slot="footer" class="dialog-footer">
          <el-button @click="paperPage.showDialog = false">取 消</el-button>
          <el-button type="primary" @click="confirmPaperSelect">确定</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
import taskApi from '@/api/task'
import examPaperApi from '@/api/examPaper'
import Pagination from '@/components/Pagination'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  components: { Pagination },
  data () {
    return {
      form: {
        id: null,
        gradeLevel: null,
        title: '',
        paperItems: []
      },
      formLoading: false,
      paperPage: {
        subjectFilter: null,
        multipleSelection: [],
        showDialog: false,
        queryParam: {
          subjectId: null,
          level: null,
          paperType: 6,
          pageIndex: 1,
          pageSize: 5
        },
        listLoading: true,
        tableData: [],
        total: 0
      },
      rules: {
        gradeLevel: [{ required: true, message: '请输入年级', trigger: 'change' }],
        title: [{ required: true, message: '请输入任务标题', trigger: 'blur' }]
      }
    }
  },
  created () {
    let _this = this
    this.initSubject(function () {
      _this.paperPage.subjectFilter = _this.subjects
    })

    let id = this.$route.query.id
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      taskApi.select(id).then(re => {
        _this.form = re.response
        _this.formLoading = false
      })
    }
  },
  methods: {
    addPaper () {
      this.paperPage.queryParam.level = this.form.gradeLevel
      this.paperPage.showDialog = true
      this.search()
    },
    confirmPaperSelect () {
      this.paperPage.multipleSelection.forEach(ep => this.form.paperItems.push(ep))
      this.paperPage.showDialog = false
    },
    search () {
      this.paperPage.showDialog = true
      this.listLoading = true
      examPaperApi.taskExamPage(this.paperPage.queryParam).then(data => {
        const re = data.response
        this.paperPage.tableData = re.list
        this.paperPage.total = re.total
        this.paperPage.queryParam.pageIndex = re.pageNum
        this.paperPage.listLoading = false
      })
    },
    handleSelectionChange (val) {
      this.paperPage.multipleSelection = val
    },
    examPaperSubmitForm () {
      this.paperPage.queryParam.pageIndex = 1
      this.search()
    },
    levelChange () {
      this.paperPage.queryParam.subjectId = null
      this.paperPage.subjectFilter = this.subjects.filter(data => data.level === this.form.gradeLevel)
    },
    removePaper (row) {
      this.form.paperItems.forEach((item, index, arr) => {
        if (item.id === row.id) {
          arr.splice(index, 1)
        }
      })
    },
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          taskApi.edit(this.form).then(data => {
            if (data.code === 1) {
              _this.$message.success(data.message)
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/task/list')
              })
            } else {
              _this.$message.error(data.message)
            }
            _this.formLoading = false
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
        gradeLevel: null,
        title: '',
        paperItems: []
      }
      this.form.id = lastId
    },
    subjectFormatter (row, column, cellValue, index) {
      return this.subjectEnumFormat(cellValue)
    },
    ...mapActions('exam', { initSubject: 'initSubject' }),
    ...mapActions('tagsView', { delCurrentView: 'delCurrentView' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionTypeEnum: state => state.exam.question.typeEnum,
      levelEnum: state => state.user.levelEnum
    }),
    ...mapGetters('exam', ['subjectEnumFormat']),
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>
