<template>
  <div id="app">
    <img class="logo" src="./assets/logo.jpeg">
    <div class="beian">
      <a class="beian-1" href = 'http://www.beian.miit.gov.cn/' target="_blank">津ICP备18006982号-1</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px; 
}
#app {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.logo {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.beian {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 120px;
  background-color: #181818;
  text-align: center
}
.beian-1 {
  line-height: 60px;
  color: #939393;
  font-size: 15px;
  text-decoration: none;
}
</style>
