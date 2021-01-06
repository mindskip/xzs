<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="User Id：">
        <el-input v-model="queryParam.userId"></el-input>
      </el-form-item>
      <el-form-item label="Username: ">
        <el-input v-model="queryParam.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Search</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="Id" label="Id" width="100" />
      <el-table-column prop="userName" label="Username" width="150" />
      <el-table-column prop="realName" label="Name" width="150" />
      <el-table-column prop="content" label="Activity" />
      <el-table-column prop="createTime" label="Create Time" width="160px"/>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                @pagination="search"/>
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
        userId: null,
        userName: null,
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: true,
      tableData: [],
      total: 0
    }
  },
  created () {
    let userId = this.$route.query.userId
    if (userId && parseInt(userId) !== 0) {
      this.queryParam.userId = userId
    }
    this.search()
  },
  methods: {
    search () {
      this.listLoading = true
      userApi.getUserEventPageList(this.queryParam).then(data => {
        const re = data.response
        this.tableData = re.list
        this.total = re.total
        this.queryParam.pageIndex = re.pageNum
        this.listLoading = false
      })
    },
    submitForm () {
      this.queryParam.pageIndex = 1
      this.search()
    }
  }
}
</script>
