<template>
  <div class="page">

    <view class="page__hd_spacing" style="background:#488eeb">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div style="width: 50px;height: 50px;margin:25px 0px 25px 25px">
            <open-data type="userAvatarUrl"/>
          </div>
        </div>
        <div class="weui-flex__item">
          <div style="margin-top: 35px;color: white">
            <open-data type="userNickName"/>
          </div>
        </div>
        <div class="weui-flex__item">
        </div>
      </div>
    </view>

    <div class="page__bd page__bd_spacing" style="height: 400px;background: white;">
      <div style="padding: 20px;color: darkcyan">
        <p>鱼鱼虾虾小程序是一款水产信息普及系统,让你了解鱼虾的生长的地理位置</p>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    mounted () {
    }
  }
</script>

<style scoped>
  .log-list {
    display: flex;
    flex-direction: column;
    padding: 40 rpx;
  }

  .log-item {
    margin: 10 rpx;
  }

</style>
