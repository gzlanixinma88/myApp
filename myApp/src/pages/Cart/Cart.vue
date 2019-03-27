<template>
  <div>
    <Header :title="title"></Header>
    <div>我的</div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  name: 'Cart',
  component: {
    Header
  },
  data(){
    return {
      title: '我的'
    }
  },
}
</script>

<style scoped>

</style>
