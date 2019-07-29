<template>
  <div style="margin-top: 10px">
    <el-row>
      <el-carousel :interval="5000" arrow="always" type="card">
        <el-carousel-item >
          <img src="@/assets/carousel/1.png" >
        </el-carousel-item>
        <el-carousel-item >
          <img src="@/assets/carousel/2.png" >
        </el-carousel-item>
        <el-carousel-item >
          <img src="@/assets/carousel/3.png" >
        </el-carousel-item>
        <el-carousel-item >
          <img src="@/assets/carousel/4.png" >
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row class="app-item-contain">
      <h3 class="index-title-h3" style="border-left: solid 10px #3651d4;">任务中心</h3>
      <div style="padding-left: 15px">
        <el-collapse  v-loading="taskLoading"  accordion>
          <el-collapse-item title="考试训练一期" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="考试训练二期" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="考试训练三期" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="考试训练四期" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-row>
    <el-row class="app-item-contain">
      <h3 class="index-title-h3">固定试卷</h3>
      <div style="padding-left: 15px">
        <el-col :span="4" v-for="(item, index) in fixedPaper" :key="index" :offset="index > 0 ? 1 : 0">
          <el-card :body-style="{ padding: '0px' }" v-loading="loading">
            <img src="@/assets/exam-paper/show1.png" class="image">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <router-link target="_blank" :to="{path:'/do',query:{id:item.id}}">
                  <el-button type="text" class="button">开始做题</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-row>
    <el-row class="app-item-contain">
      <h3 class="index-title-h3" style="border-left: solid 10px rgb(220, 208, 65);">时段试卷</h3>
      <div style="padding-left: 15px">
        <el-col :span="4" v-for="(item, index) in timeLimitPaper" :key="index" :offset="index > 0 ? 1 : 0">
          <el-card :body-style="{ padding: '0px' }" v-loading="loading">
            <img src="@/assets/exam-paper/show2.png" class="image">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <router-link target="_blank" :to="{path:'/do',query:{id:item.id}}">
                  <el-button type="text" class="button">开始做题</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-row>
    <el-row class="app-item-contain">
      <h3 class="index-title-h3" style="border-left: solid 10px #e454b1;">推送试卷</h3>
      <div style="padding-left: 15px">
        <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
          <el-card :body-style="{ padding: '0px' }" v-loading="loading">
            <img src="@/assets/exam-paper/show3.png" class="image">
            <div style="padding: 14px;">
              <span>2018年小学数学语文考试试卷</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">开始做题</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>

import indexApi from '@/api/dashboard'
export default {
  data () {
    return {
      fixedPaper: [],
      timeLimitPaper: [],
      loading: false,
      taskLoading: false
    }
  },
  created () {
    let _this = this
    this.loading = true
    indexApi.index().then(re => {
      _this.fixedPaper = re.response.fixedPaper
      _this.timeLimitPaper = re.response.timeLimitPaper
      _this.loading = false
    })
  }
}
</script>

<style lang="scss" scoped>
  .index-title-h3 {
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
    border-left: solid 10px #2ce8b4;
    padding-left: 10px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 50%;
    height: 80%;
    display: block;
    margin: 20px auto 10px auto;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
