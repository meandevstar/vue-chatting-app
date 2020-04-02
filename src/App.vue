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
body {
  height: 100%;
  overflow: hidden !important;
}
body {
  margin: 0;
  background-color: white;
  background-size: cover;
  height: 100%;
}
</style>