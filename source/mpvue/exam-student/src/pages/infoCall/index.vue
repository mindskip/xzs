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
      </div>
    </view>

    <div class="page__bd page__bd_spacing" style="height: 400px;background: white;">
      <div style="padding: 20px;color: burlywood">
        <p>有任何问题请发邮件</p>
        <p>Email: alvis.uho@gmail.com </p>
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
