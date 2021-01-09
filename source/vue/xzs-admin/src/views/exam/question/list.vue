<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="Question ID：">
        <el-input v-model="queryParam.id" clearable></el-input>
      </el-form-item>
      <el-form-item label="Industry：">
        <el-select v-model="queryParam.industry" placeholder="Industry"  @change="levelChange" clearable>
          <el-option v-for="item in industryFilter" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Skill：">
        <el-select v-model="queryParam.skill" clearable placeholder="Skill">
          <el-option v-for="item in subjectFilter" :key="item.id" :value="item.id"
                     :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="题型：">
        <el-select v-model="queryParam.questionType" clearable>
          <el-option v-for="item in questionType" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">Search</el-button>
        <el-popover placement="bottom" trigger="click">
          <!--<el-button type="warning" size="mini" v-for="item in editUrlEnum" :key="item.key"
                     @click="$router.push({path:item.value})">{{item.name}}
          </el-button> -->
        <el-button slot="reference" type="primary" class="link-left" @click="$router.push('/exam/question/edit/shortAnswer')">Add</el-button>
        </el-popover>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="id" label="ID" width="90px"/>
      <el-table-column prop="industryName" label="Industry" width="120px"/>
      <el-table-column prop="skillName" label="Skill" width="120px"/>
      <!-- <el-table-column prop="questionType" label="题型" :formatter="questionTypeFormatter" width="70px"/> -->
      <el-table-column prop="shortTitle" label="Question" show-overflow-tooltip/>
      <!-- <el-table-column prop="score" label="分数" width="60px"/> -->
      <el-table-column prop="difficult" label="Difficulty" width="100px"/>
      <el-table-column prop="createTime" label="Create Time" width="160px"/>
      <el-table-column label="Operation" align="center" width="220px">
        <template slot-scope="{row}">
          <el-button size="mini"   @click="showQuestion(row)">Preview</el-button>
          <el-button size="mini"  @click="editQuestion(row)">Edit</el-button>
          <el-button size="mini"  type="danger" @click="deleteQuestion(row)" class="link-left">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                @pagination="search"/>
    <el-dialog :visible.sync="questionShow.dialog" style="width: 100%;height: 100%">
      <QuestionShow :qType="questionShow.qType" :question="questionShow.question" :qLoading="questionShow.loading"/>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import QuestionShow from './components/Show'
import questionApi from '@/api/question'
import industryApi from '@/api/industry'

export default {
  components: { Pagination, QuestionShow },
  data () {
    return {
      queryParam: {
        id: null,
        questionType: '1',
        skill: null,
        industry: null,
        pageIndex: 1,
        pageSize: 10
      },
      subjectFilter: null,
      industryFilter: null,
      listLoading: false,
      tableData: [],
      total: 0,
      questionShow: {
        qType: 0,
        dialog: false,
        question: null,
        loading: false
      }
    }
  },
  created () {
    this.initSubject()
    this.search()
    let _this = this
        this.initSubject(function () {
          _this.subjectFilter = _this.subjects
        })
    industryApi.list().then(re => {
                    this.industryFilter=re.response;
                  })
  },
  methods: {
    submitForm () {
      this.queryParam.pageIndex = 1
      this.search()
    },
    search () {
      this.listLoading = true
      questionApi.pageList(this.queryParam).then(data => {
        const re = data.response
        this.tableData = re.list
        this.total = re.total
        this.queryParam.pageIndex = re.pageNum
        this.listLoading = false
      })
    },
    levelChange () {
      this.queryParam.subjectId = null
      this.subjectFilter = this.subjects.filter(data => data.level === this.queryParam.level)
    },
    addQuestion () {
      this.$router.push('/exam/question/edit/singleChoice')
    },
    showQuestion (row) {
      let _this = this
      this.questionShow.dialog = true
      this.questionShow.loading = true
      questionApi.select(row.id).then(re => {
        _this.questionShow.qType = re.response.questionType
        _this.questionShow.question = re.response
        _this.questionShow.loading = false
      })
    },
    editQuestion (row) {
      let url = this.enumFormat(this.editUrlEnum, row.questionType)
      this.$router.push({ path: url, query: { id: row.id } })
    },
    deleteQuestion (row) {
      let _this = this
      questionApi.deleteQuestion(row.id).then(re => {
        if (re.code === 1) {
          _this.search()
          _this.$message.success(re.message)
        } else {
          _this.$message.error(re.message)
        }
      })
    },
    questionTypeFormatter (row, column, cellValue, index) {
      return this.enumFormat(this.questionType, cellValue)
    },
    subjectFormatter (row, column, cellValue, index) {
      return this.subjectEnumFormat(cellValue)
    },
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionType: state => state.exam.question.typeEnum,
      editUrlEnum: state => state.exam.question.editUrlEnum,
      levelEnum: state => state.user.levelEnum
    }),
    ...mapGetters('exam', ['subjectEnumFormat']),
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>
