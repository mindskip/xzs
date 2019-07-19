<template>
  <el-container>
    <el-header class="align-center">
      <h1>{{form.name}}</h1>
      <div>
        <span class="question-title-padding">试卷总分：{{form.score}}</span>
        <span class="question-title-padding">考试时间：{{form.suggestTime}}分钟</span>
      </div>
    </el-header>
    <el-main>
      <el-form :model="form" ref="form" v-loading="formLoading" label-width="100px">
        <el-form-item :key="index" required v-for="(titleItem,index) in form.titleItems">
          <h3>{{titleItem.name}}</h3>
          <el-card class="exampaper-item-box" v-if="titleItem.questionItems.length!==0">
            <el-form-item :key="questionItem.itemOrder" :label="questionItem.itemOrder+'.'"
                          v-for="questionItem in titleItem.questionItems"
                        class="exam-question-item"  label-width="50px">
              <QuestionEdit :qType="questionItem.questionType" :question="questionItem"  :answer="answer.answerItems[questionItem.itemOrder-1]"/>
            </el-form-item>
          </el-card>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer class="align-center">
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button>取消</el-button>
    </el-footer>
  </el-container>
</template>

<script>

import QuestionEdit from '../components/QuestionEdit'
import examPaperApi from '@/api/examPaper'
import examPaperAnswerApi from '@/api/examPaperAnswer'

export default {
  components: { QuestionEdit },
  data () {
    return {
      form: {},
      formLoading: false,
      answer: {
        questionId: null,
        doTime: 0,
        answerItems: []
      },
      timer: null
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      examPaperApi.select(id).then(re => {
        _this.form = re.response
        _this.initAnswer()
        _this.formLoading = false
      })
    }
  },
  mounted () {
    let _this = this
    this.timer = setInterval(function () {
      ++_this.answer.doTime
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    initAnswer () {
      this.answer.id = this.form.id
      let titleItemArray = this.form.titleItems
      for (let tIndex in titleItemArray) {
        let questionArray = titleItemArray[tIndex].questionItems
        for (let qIndex in questionArray) {
          let question = questionArray[qIndex]
          this.answer.answerItems.push({ questionId: question.id, content: null, contentArray: [] })
        }
      }
    },
    submitForm () {
      let _this = this
      _this.formLoading = true
      examPaperAnswerApi.answerSubmit(this.answer).then(re => {
        if (re.code === 1) {
          _this.$alert('试卷得分：' + re.response + '分', '考试结果', {
            confirmButtonText: '返回考试记录',
            callback: action => {
              _this.$router.push('/record/index')
            }
          })
        } else {
          _this.$message.error(re.message)
        }
        _this.formLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .align-center {
    text-align: center
  }

  .exam-question-item{
    padding: 10px;
    .el-form-item__label{
      font-size: 15px !important;
    }
  }

  .question-title-padding{
    padding-left: 25px;
    padding-right: 25px;
  }
</style>
