<template>
  <div class="header">
    <div class="header-list">
      <span>{{children}}</span>
    </div>
  </div>
</template>

<script>
import pub from 'pubsub-js'
export default {
  name: 'Header',
  data(){
    return {
      children: '我的'
    }
  },
  created(){
    let url = this.$route.path
    url === '/home'?this.children='首页':this.children = '我的'
    pub.subscribe('getTitle',(msg , data) => {
      this.children = data
    });
  },
}
</script>

<style lang="less" scoped>
  .header{
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: yellowgreen;
    color: #fff;
    .header-list{
      height: 100%;
      span{
        font-size: 30px;
        color: #fff;
        display: block;
      }
    }
  }
</style>
