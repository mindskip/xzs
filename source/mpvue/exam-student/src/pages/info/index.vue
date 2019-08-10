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
          <!--          <open-data type="userCountry"/>
                    <open-data type="userProvince"/>
                    <open-data type="userCity"/>-->
        </div>
      </div>
    </view>

    <div class="page__bd page__bd_spacing">

      <div class="weui-cells__title"></div>
      <div class="weui-cells weui-cells_after-title">
        <navigator class="weui-cell weui-cell_access" :url=" '/pages/infoDetail/main'">
          <div class="weui-cell__hd">
            <image src="/static/icon/icon_my_blue.png" style="margin-right: 8px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">个人资料</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>

        <navigator class="weui-cell weui-cell_access" :url=" '/pages/infoMsg/main'">
          <div class="weui-cell__hd">
            <image src="/static/icon/icon_call.png" style="margin-right: 8px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">消息</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>

      <div class="weui-cells__title"></div>
      <div class="weui-cells weui-cells_after-title">
        <navigator class="weui-cell weui-cell_access" :url=" '/pages/infoCall/main'">
          <div class="weui-cell__hd">
            <image src="/static/icon/icon_phone.png" style="margin-right: 8px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">客服</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>

        <navigator class="weui-cell weui-cell_access" :url=" '/pages/infoResponse/main'">
          <div class="weui-cell__hd">
            <image src="/static/icon/icon_response.png" style="margin-right: 8px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">反馈</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>

        <navigator class="weui-cell weui-cell_access" :url=" '/pages/infoAbout/main'">
          <div class="weui-cell__hd">
            <image src="/static/icon/icon_about.png" style="margin-right: 8px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">关于</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>

      </div>


    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
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
