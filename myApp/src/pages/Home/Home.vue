<template>
  <div>
    <Header :title="title"></Header>
    <div>首页</div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  name: 'Home',
  component: {
    Header
  },
  data(){
    return {
      title: '首页'
    }
  },
}
</script>

<style scoped>

</style>
