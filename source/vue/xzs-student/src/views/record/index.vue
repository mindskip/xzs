<template>
  <div style="margin-top: 10px" class="app-contain">
     <el-row :gutter="50">
       <el-col :span="18">
         <el-table v-loading="listLoading" :data="tableData" fit highlight-current-row style="width: 100%" @row-click="itemSelect">
           <el-table-column prop="id" label="序号" width="90px"/>
           <el-table-column prop="paperName" label="名称"  />
           <el-table-column prop="subjectName" label="学科"  width="70" />
           <el-table-column label="状态" prop="status" width="100px">
             <template slot-scope="{row}">
               <el-tag :type="statusTagFormatter(row.status)">
                 {{ statusTextFormatter(row.status) }}
               </el-tag>
             </template>
           </el-table-column>
           <el-table-column prop="createTime" label="做题时间"  width="170" />
           <el-table-column  align="right" width="70">
             <template slot-scope="{row}">
               <router-link target="_blank" :to="{path:'/edit',query:{id:row.id}}" v-if="row.status === 1 ">
                 <el-button  type="text" size="small">批改</el-button>
               </router-link>
               <router-link target="_blank" :to="{path:'/read',query:{id:row.id}}" v-if="row.status === 2 ">
                 <el-button  type="text" size="small">查看试卷</el-button>
               </router-link>
             </template>
           </el-table-column>
         </el-table>
         <pagination v-show="total>0" :total="total" :background="false" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                     @pagination="search" style="margin-top: 20px"/>
       </el-col>
       <el-col  :span="6" >
         <el-card  class="record-answer-info">
            <el-form label-width="50%" >
              <el-form-item label="系统判分：">
                <span>{{selectItem.systemScore}}</span>
              </el-form-item>
              <el-form-item label="最终得分：">
                <span>{{selectItem.userScore}}</span>
              </el-form-item>
              <el-form-item label="试卷总分：">
                <span>{{selectItem.paperScore}}</span>
              </el-form-item>
              <el-form-item label="正确题数：">
                <span>{{selectItem.questionCorrect}}</span>
              </el-form-item>
              <el-form-item label="总题数：">
                <span>{{selectItem.questionCount}}</span>
              </el-form-item>
              <el-form-item label="用时：">
                <span>{{selectItem.doTime}}</span>
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
import examPaperAnswerApi from '@/api/examPaperAnswer'
import { scrollTo } from '@/utils/scroll-to'
export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: false,
      tableData: [],
      total: 0,
      selectItem: {
        systemScore: '0',
        userScore: '0',
        doTime: '0',
        paperScore: '0',
        questionCorrect: 0,
        questionCount: 0
      }
    }
  },
  created () {
    this.search()
    scrollTo(0, 800)
  },
  methods: {
    search () {
      this.listLoading = true
      let _this = this
      examPaperAnswerApi.pageList(this.queryParam).then(data => {
        const re = data.response
        _this.tableData = re.list
        _this.total = re.total
        _this.queryParam.pageIndex = re.pageNum
        _this.listLoading = false
      })
    },
    itemSelect (row, column, event) {
      this.selectItem = row
    },
    statusTagFormatter (status) {
      return this.enumFormat(this.statusTag, status)
    },
    statusTextFormatter (status) {
      return this.enumFormat(this.statusEnum, status)
    }
  },
  computed: {
    ...mapGetters('enumItem', [
      'enumFormat'
    ]),
    ...mapState('enumItem', {
      statusEnum: state => state.exam.examPaperAnswer.statusEnum,
      statusTag: state => state.exam.examPaperAnswer.statusTag
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
