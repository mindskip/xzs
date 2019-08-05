<template>
  <div v-loading="qLoading" style="line-height:1.8">
    <div v-if="qType==1||qType==2||qType==3||qType==4||qType==5">
      <div v-if="qType==1" >
        <div class="q-title" v-html="question.title"/>
        <div class="q-content">
          <el-radio-group v-model="answer.content">
            <el-radio  v-for="item in question.items"  :key="item.prefix"  :label="item.prefix" >
              <span class="question-prefix">{{item.prefix}}.</span>
              <span v-html="item.content" class="q-item-span-content"></span>
            </el-radio>
          </el-radio-group>
        </div>
      </div>
      <div v-else-if="qType==2" >
        <div class="q-title" v-html="question.title"/>
        <div class="q-content">
          <el-checkbox-group v-model="answer.contentArray" >
            <el-checkbox v-for="item in question.items" :label="item.prefix" :key="item.prefix" >
              <span class="question-prefix">{{item.prefix}}.</span>
              <span v-html="item.content"  class="q-item-span-content"></span>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div v-else-if="qType==3" >
        <div class="q-title" v-html="question.title" style="display: inline;margin-right: 10px"/>
        <span style="padding-right: 10px;">(</span>
        <el-radio-group v-model="answer.content">
          <el-radio  v-for="item in question.items"  :key="item.prefix"  :label="item.prefix">
            <span v-html="item.content" class="q-item-span-content"></span>
          </el-radio>
        </el-radio-group>
        <span style="padding-left: 10px;">)</span>
      </div>
      <div v-else-if="qType==4" >
        <div class="q-title" v-html="question.title"/>
        <div v-if="answer.contentArray!==null">
          <el-form-item :label="item.prefix" :key="item.prefix"  v-for="item in question.items"  label-width="50px" style="margin-top: 10px;margin-bottom: 10px;">
            <el-input v-model="answer.contentArray[item.prefix-1]"  />
          </el-form-item>
        </div>
      </div>
      <div v-else-if="qType==5">
        <div class="q-title" v-html="question.title"/>
        <div>
          <el-input  v-model="answer.content" type="textarea" rows="5" ></el-input>
        </div>
      </div>
      <div class="question-answer-show-item" style="margin-top: 15px">
        <span class="question-show-item">结果：</span>
        <el-tag :type="doRightTagFormatter(answer.doRight)">
          {{ doRightTextFormatter(answer.doRight) }}
        </el-tag>
      </div>
      <div class="question-answer-show-item">
        <span class="question-show-item">分数：</span>
        <span>{{question.score}}</span>
      </div>
      <div class="question-answer-show-item">
        <span class="question-show-item">难度：</span>
        <el-rate disabled v-model="question.difficult" class="question-show-item"></el-rate>
      </div>
      <br/>
      <div class="question-answer-show-item" style="line-height: 1.8">
        <span class="question-show-item">解析：</span>
        <span v-html="question.analyze" class="q-item-span-content" />
      </div>
      <div class="question-answer-show-item">
        <span class="question-show-item">正确答案：</span>
        <span v-if="qType==1||qType==2 ||qType==5" v-html="question.correct" class="q-item-span-content"/>
        <span v-if="qType==3" v-html="trueFalseFormatter(question)" class="q-item-span-content"/>
        <span v-if="qType==4">{{question.correctArray}}</span>
      </div>
    </div>
    <div v-else>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'QuestionShow',
  props: {
    question: {
      type: Object,
      default: function () {
        return {}
      }
    },
    answer: {
      type: Object,
      default: function () {
        return { id: null, content: '', contentArray: [], doRight: false }
      }
    },
    qLoading: {
      type: Boolean,
      default: false
    },
    qType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    trueFalseFormatter (question) {
      return question.items.filter(d => d.prefix === question.correct)[0].content
    },
    doRightTagFormatter (status) {
      return this.enumFormat(this.doRightTag, status)
    },
    doRightTextFormatter (status) {
      return this.enumFormat(this.doRightEnum, status)
    }
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      doRightEnum: state => state.exam.question.answer.doRightEnum,
      doRightTag: state => state.exam.question.answer.doRightTag
    })
  }
}
</script>
