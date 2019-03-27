<template>
  <div class="footer">
    <div @click="goto('/home')" class="li" :class="{on:isCurrent('/home')}">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </div>
    <div @click="goto('/cart')" class="li" :class="{on:isCurrent('/cart')}">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </div>
  </div>
</template>
<script>
import pub from 'pubsub-js'
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {
    goto (path) {
      path === '/home'?this.title='首页':this.title = '我的'
      this.$router.push({
        path,
        query:{
          title:this.title
        }
      })
      pub.publish('getTitle',this.title);
    },
    isCurrent (path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="less" scoped>
  .footer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-top: 1px solid gainsboro;
    width: 100%;
    position: absolute;
    bottom: 0;
    .iconfont{
      display: inline-block;
      width: 40px;
      height: 40px;
    }
    .li{
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span{
        font-size: 18px;
      }
    }
    .on{
      color: yellowgreen;
    }
  }
</style>
