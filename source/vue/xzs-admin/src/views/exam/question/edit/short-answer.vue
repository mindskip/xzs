<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="Industry：" prop="industryId" required>
        <el-select v-model="form.industryId"   placeholder="Industry"  @change="levelChange">
          <el-option v-for="item in industryFilter" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Skill：" prop="skillId" required>
        <el-select v-model="form.skillId" placeholder="Skill" >
          <el-option v-for="item in subjectFilter" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Question：" prop="title" required>
        <el-input v-model="form.title"   @focus="inputClick(form,'title')" />
      </el-form-item>
      <el-form-item label="Answer：" prop="correct" required>
        <el-input v-model="form.correct"   @focus="inputClick(form,'correct')" />
      </el-form-item>
      <el-form-item label="Analysis：" prop="analyze" required>
        <el-input v-model="form.analyze"  @focus="inputClick(form,'analyze')" />
      </el-form-item>
      <!-- <el-form-item label="分数：" prop="score" required>
        <el-input-number v-model="form.score" :precision="1" :step="1" :max="100"></el-input-number>
      </el-form-item> -->
      <el-form-item label="Difficulty：" required>
        <el-rate v-model="form.difficult" class="question-item-rate"></el-rate>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button @click="resetForm">Reset</el-button>
        <el-button type="success" @click="showQuestion">Preview</el-button>
      </el-form-item>
    </el-form>
    <el-dialog  :visible.sync="richEditor.dialogVisible"  append-to-body :close-on-click-modal="false" style="width: 100%;height: 100%"   :show-close="false" center>
      <Ueditor @ready="editorReady"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editorConfirm">Confirm</el-button>
        <el-button @click="richEditor.dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="questionShow.dialog" style="width: 100%;height: 100%">
      <QuestionShow :qType="questionShow.qType" :question="questionShow.question" :qLoading="questionShow.loading"/>
    </el-dialog>
  </div>
</template>

<script>
import QuestionShow from '../components/Show'
import Ueditor from '@/components/Ueditor'
import { mapGetters, mapState, mapActions } from 'vuex'
import questionApi from '@/api/question'
import industryApi from '@/api/industry'

export default {
  components: {
    Ueditor, QuestionShow
  },
  data () {
    return {
      form: {
        id: null,
        questionType: 5,
        industryId: null,
        skillId: null,
        title: '',
        items: [],
        analyze: '',
        correct: '',
        score: '0',
        difficult: 0
      },
      subjectFilter: null,
      industryFilter: null,
      formLoading: false,
      rules: {
        gradeLevel: [
          { required: true, message: 'Please select grade', trigger: 'change' }
        ],
        subjectId: [
          { required: true, message: 'Please select subject', trigger: 'change' }
        ],
        title: [
          { required: true, message: 'Please enter the question', trigger: 'blur' }
        ],
        correct: [
          { required: true, message: 'Please enter the answer', trigger: 'blur' }
        ],
        analyze: [
          { required: true, message: 'Please enter parse', trigger: 'blur' }
        ],
        score: [
          { required: true, message: 'Please enter the score', trigger: 'blur' }
        ]
      },
      richEditor: {
        dialogVisible: false,
        object: null,
        parameterName: '',
        instance: null
      },
      questionShow: {
        qType: 0,
        dialog: false,
        question: null,
        loading: false
      }
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    this.initSubject(function () {
      _this.subjectFilter = _this.subjects
    })
    this.subjectFilter = this.subjects.filter(data => data.level === this.form.gradeLevel)
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      questionApi.select(id).then(re => {
        _this.form = re.response
        _this.formLoading = false
      })
    }
    industryApi.list().then(re => {
                this.industryFilter=re.response;
              })

  },
  methods: {
    editorReady (instance) {
      this.richEditor.instance = instance
      let currentContent = this.richEditor.object[this.richEditor.parameterName]
      this.richEditor.instance.setContent(currentContent)
      // 光标定位到Ueditor
      this.richEditor.instance.focus(true)
    },
    inputClick (object, parameterName) {
      this.richEditor.object = object
      this.richEditor.parameterName = parameterName
      this.richEditor.dialogVisible = true
    },
    editorConfirm () {
      let content = this.richEditor.instance.getContent()
      this.richEditor.object[this.richEditor.parameterName] = content
      this.richEditor.dialogVisible = false
    },
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          questionApi.edit(this.form).then(re => {
            if (re.code === 1) {
              _this.$message.success(re.message)
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/exam/question/list')
              })
            } else {
              _this.$message.error(re.message)
              this.formLoading = false
            }
          }).catch(e => {
            this.formLoading = false
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
        questionType: 5,
        gradeLevel: null,
        subjectId: null,
        title: '',
        items: [],
        analyze: '',
        correct: '',
        score: '0',
        difficult: 0
      }
    },
    levelChange () {
      this.form.subjectId = null
      //this.subjectFilter = this.subjects.filter(data => data.level === this.form.gradeLevel)
      console.log(this.subjectFilter);

    },
    showQuestion () {
      this.questionShow.dialog = true
      this.questionShow.qType = this.form.questionType
      this.questionShow.question = this.form
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
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>
