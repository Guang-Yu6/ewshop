<template>
  <div class="home">
    <img src="~assets/images/001.jpg" alt="">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      // imgsrc:require('assets/images')
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>