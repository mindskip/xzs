<template>
  <div style="margin-top: 10px" class="app-contain">
    <el-row :gutter="50">
      <el-col :span="14">
        <el-table v-loading="listLoading" :data="tableData" fit highlight-current-row style="width: 100%" @row-click="itemSelect">
          <el-table-column prop="shortTitle" label="题干"  show-overflow-tooltip />
          <el-table-column prop="questionType" label="题型"  :formatter="questionTypeFormatter" width="70" />
          <el-table-column prop="subjectName" label="学科"  width="50" />
          <el-table-column prop="createTime" label="做题时间"  width="170" />
        </el-table>
        <pagination v-show="total>0" :total="total" :background="false" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                    @pagination="search" style="margin-top: 20px"/>
      </el-col>
      <el-col  :span="10" >
        <el-card  class="record-answer-info">
          <el-form>
            <el-form-item>
              <QuestionAnswerShow :qType="selectItem.questionType" :qLoading="qAnswerLoading" :question="selectItem.questionItem"  :answer="selectItem.answerItem"/>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'
import questionAnswerApi from '@/api/questionAnswer'
import QuestionAnswerShow from '../exam/components/QuestionAnswerShow'

export default {
  components: { Pagination, QuestionAnswerShow },
  data () {
    return {
      queryParam: {
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: false,
      tableData: [],
      total: 0,
      qAnswerLoading: false,
      selectItem: {
        questionType: 0,
        questionItem: null,
        answerItem: null
      }
    }
  },
  created () {
    this.search()
  },
  methods: {
    search () {
      this.listLoading = true
      let _this = this
      questionAnswerApi.pageList(this.queryParam).then(data => {
        const re = data.response
        _this.tableData = re.list
        _this.total = re.total
        _this.queryParam.pageIndex = re.pageNum
        _this.listLoading = false
        if (re.list.length !== 0) {
          _this.qAnswerShow(re.list[0].id)
        }
      })
    },
    itemSelect (row, column, event) {
      this.qAnswerShow(row.id)
    },
    qAnswerShow (id) {
      let _this = this
      this.qAnswerLoading = true
      questionAnswerApi.select(id).then(re => {
        let response = re.response
        _this.selectItem.questionType = response.questionVM.questionType
        _this.selectItem.questionItem = response.questionVM
        _this.selectItem.answerItem = response.questionAnswerVM
        _this.qAnswerLoading = false
      })
    },
    questionTypeFormatter (row, column, cellValue, index) {
      return this.enumFormat(this.questionTypeEnum, cellValue)
    }
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionTypeEnum: state => state.exam.question.typeEnum
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
