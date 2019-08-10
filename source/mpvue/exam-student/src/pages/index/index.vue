<template>
  <div class="page">
    <i-cell-group>
      <i-cell title="只显示箭头" is-link></i-cell>
      <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
      <i-cell>
        <i-card title="一年余语文试卷一年余语文试卷一年余语文试卷" >
          <view slot="content">内容不错</view>
          <view slot="footer"><i-button>开始做题</i-button></view>
        </i-card>
      </i-cell>
      <i-cell>
        <i-card title="一年余语文试卷一年余语文试卷一年余语文试卷"  >
          <view slot="content">内容不错</view>
          <view slot="footer"><i-button>开始做题</i-button></view>
        </i-card>
      </i-cell>
    </i-cell-group>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    components: {
    },
    data () {
      return {
      }
    },
    created () {

    },
    methods: {
    },
    computed: {
      ...mapGetters('dataStore', [
        'search'
      ]),
      ...mapGetters('locationStore', [
        'setItem'
      ])
    }
  }
</script>

<style scoped>
</style>
