<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
