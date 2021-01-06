<template>
    <div class="app-container">
      <el-form :model="queryParam" ref="queryForm" :inline="true">
        <!--<el-form-item label="年级：">
          <el-select v-model="queryParam.level" placeholder="年级" clearable="">
            <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
          </el-select>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="submitForm">Search</el-button>
          <router-link :to="{path:'/education/industry/edit'}" class="link-left">
            <el-button type="primary">Add</el-button>
          </router-link>
        </el-form-item>
      </el-form>

      <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="industry"/>
        <el-table-column width="220px" label="Operation" align="center">
          <template slot-scope="{row}">
            <router-link :to="{path:'/education/industry/edit', query:{id:row.id}}" class="link-left">
              <el-button size="mini">Edit</el-button>
            </router-link>
            <el-button   size="mini" type="danger" @click="delSubject(row)" class="link-left">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                  @pagination="search"/>
    </div>
  </template>

  <script>
  import { mapGetters, mapState } from 'vuex'
  import Pagination from '@/components/Pagination'
  import industryApi from '@/api/industry'

  export default {
    components: { Pagination },
    data () {
      return {
        queryParam: {
          level: null,
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
      search () {
        this.listLoading = true
        industryApi.pageList(this.queryParam).then(data => {
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
      },
      delSubject (row) {
        let _this = this
        industryApi.deleteSubject(row.id).then(re => {
          if (re.code === 1) {
            _this.search()
            _this.$message.success(re.message)
          } else {
            _this.$message.error(re.message)
          }
        })
      }
    },
    computed: {
      ...mapGetters('enumItem', [
        'enumFormat'
      ]),
      ...mapState('enumItem', {
        levelEnum: state => state.user.levelEnum
      })
    }
  }
  </script>
