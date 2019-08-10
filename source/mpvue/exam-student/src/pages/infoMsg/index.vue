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
      <div class="weui-cells__title" style="margin-top: 3px;padding: 10px;font-size: 12px;">暂无消息</div>
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
