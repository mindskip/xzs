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

    <div class="page__bd page__bd_spacing">

      <div class="weui-cells__title"></div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            语言 ：
          </div>
          <div class="weui-cell__bd">
            <open-data type="userLanguage"/>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            性别 ：
          </div>
          <div class="weui-cell__bd">
            <open-data type="userGender"/>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            国家 ：
          </div>
          <div class="weui-cell__bd">
            <open-data type="userCountry"/>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            省份 ：
          </div>
          <div class="weui-cell__bd">
            <open-data type="userProvince"/>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            城市 ：
          </div>
          <div class="weui-cell__bd">
            <open-data type="userCity"/>
          </div>
        </div>
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
