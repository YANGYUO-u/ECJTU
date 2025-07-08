<template>
  <div id="app">
    <Navbar v-if="$route.path !== '/login'" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>