<template>
  <div style="margin-top: 10px" class="app-contain">
    <el-card style="padding-top: 50px;padding-bottom: 50px">
      <el-collapse @change="handleChange" class="student-message-list">
        <el-collapse-item :name="item.id" :key="item.id" v-for="item in tableData">
          <template slot="title">
            {{item.title}}
            <el-tag style=" margin: 0 8px 0 auto;">{{item.createTime}}</el-tag>
          </template>
          <div>
            {{item.content}}
          </div>
        </el-collapse-item>
      </el-collapse>
      <pagination v-show="total>0" :total="total" :background="false" :page.sync="queryParam.pageIndex"
                  :limit.sync="queryParam.pageSize"
                  @pagination="search" style="margin-top: 20px;"/>
    </el-card>
  </div>
</template>

<script>
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
      if (val.length === 0) {
        return
      }
      let id = val[val.length - 1]
      userApi.read(id).then(re => {

      })
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
    }
  }
}
</script>

<style lang="scss">

</style>
