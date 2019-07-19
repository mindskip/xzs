<template>
  <el-container>
    <el-header class="align-center">
      <h1>{{form.name}}</h1>
      <div>
        <span class="question-title-padding">试卷得分：{{answer.score}}</span>
        <span class="question-title-padding">考试时间：{{answer.doTime}}分钟</span>
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
              <QuestionAnswerShow :qType="questionItem.questionType" :question="questionItem"  :answer="answer.answerItems[questionItem.itemOrder-1]"/>
            </el-form-item>
          </el-card>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

import QuestionAnswerShow from '../components/QuestionAnswerShow'
import examPaperAnswerApi from '@/api/examPaperAnswer'
export default {
  components: { QuestionAnswerShow },
  data () {
    return {
      form: {},
      formLoading: false,
      answer: {
        id: null,
        score: 0,
        doTime: 0,
        answerItems: [],
        doRight: false
      }
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      examPaperAnswerApi.read(id).then(re => {
        _this.form = re.response.paper
        _this.answer = re.response.answer
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
