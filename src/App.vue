<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

html {
  overflow-y: hidden !important;
}
html,
body,
#app,
#app-layout {
  height: 100%;
  overflow: hidden !important;
}
body {
  margin: 0;
  background-color: white;
  background-size: cover;
  height: 100%;
}
#app {
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>