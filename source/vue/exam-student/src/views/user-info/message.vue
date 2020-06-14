<template>
  <div style="margin-top: 10px" class="app-contain">
    <el-card style="padding-top: 50px;padding-bottom: 50px">
      <div class="el-table__empty-text" style="text-align: center;width: 100%" v-if="total ===0">
        <span>暂无消息</span>
      </div>
      <el-collapse @change="handleChange" class="student-message-list" v-if="total !==0 " accordion>
        <el-collapse-item :name="item.id" :key="item.id" v-for="item in tableData">
          <template slot="title">
            {{item.title}}
            <el-tag style=" margin: 0 8px 0 auto;" :type="readTagFormat(item.readed)">{{readTextFormat(item.readed)}}</el-tag>
          </template>
          <el-row>
            <label>发送人：{{item.sendUserName}}</label>
          </el-row>
          <el-row>
            <label>发送时间：{{item.createTime}}</label>
          </el-row>
          <el-row>
            <label>发送内容：{{item.content}}</label>
          </el-row>
        </el-collapse-item>
      </el-collapse>
      <pagination v-show="total>0" :total="total" :background="false" :page.sync="queryParam.pageIndex"
                  :limit.sync="queryParam.pageSize"
                  @pagination="search" style="margin-top: 20px;"/>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Pagination from '@/components/Pagination'
import userApi from '@/api/user'

export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        pageIndex: 1,
        pageSize: 10
      },

      listLoading: true,
      tableData: [],
      total: 0
    }
  },
  created () {
    this.search()
  },
  methods: {
    handleChange (val) {
      if (val === '') {
        return
      }
      let _this = this
      let selectItem = this.tableData.filter(d => d.id === val)[0]
      if (!selectItem.readed) {
        userApi.read(val).then(re => {
          selectItem.readed = true
          _this.messageCountSubtract(1)
        })
      }
    },
    search () {
      this.listLoading = true
      userApi.messagePageList(this.queryParam).then(data => {
        const re = data.response
        this.tableData = re.list
        this.total = re.total
        this.queryParam.pageIndex = re.pageNum
        this.listLoading = false
      })
    },
    readTagFormat (status) {
      return this.enumFormat(this.readTag, status)
    },
    readTextFormat (status) {
      return this.enumFormat(this.readText, status)
    },
    ...mapMutations('user', ['messageCountSubtract'])
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      readTag: state => state.user.message.readTag,
      readText: state => state.user.message.readText
    })
  }
}
</script>

<style lang="scss">

</style>
