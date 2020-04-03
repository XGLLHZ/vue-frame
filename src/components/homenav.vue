<!-- 导航栏组件 -->
<template>
  <div>
    <div class="homenav">
      <div class="nav-menu">
        <div class="nav-one">
          <router-link to="/"><span style="color:yellow">0_0 </span>XGLLHZ</router-link>
        </div>
        <div class="nav-two">
          <ul>
            <li><router-link :to="{ path: '/', query: { blogType: 5 } }">Story</router-link></li>
            <li><router-link :to="{ path: '/', query: { blogType: 4 } }">Python</router-link></li>
            <li><router-link :to="{ path: '/', query: { blogType: 2 } }">Spring Cloud</router-link></li>
            <li><router-link :to="{ path: '/', query: { blogType: 1 } }">Spring Boot</router-link></li>
            <li><router-link :to="{ path: '/', query: { blogType: 3 } }">Java</router-link></li>
            <li><router-link :to="{ path: '/', query: { blogType: 0 } }">Home</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: 'homenav'
}
</script>

<style>
.bg {
  width: 100%;
  height: 315px;
  background-image: url('../assets/bg.png');
  background-repeat: no-repeat;
}
.homenav {
  width: 100%;
  height: 80px;
  background-color: #181818;
}
.nav-menu {
  margin: 0px 10% 0px 10%;
  width: 80%;
  height: 100%;
}
.nav-one {
  float: left;
  width: 20%;
  height: 100%;
  color: #ffffff;
  font-size: 38px;
  line-height: 80px;
}
.nav-two {
  float: right;
  width: 55%;
  height: 100%;
}
.nav-one a {
  text-decoration: none;
  color: #ffffff;
}
.nav-one a:hover {
  color: yellow;
}
.nav-two ul {
  margin: 10px 0px 0px 0px;
  line-height: 30px;
  list-style-type: none;
  overflow: hidden;
}
.nav-two ul li {
  float: right;
}
.nav-two ul li a {
  text-decoration: none;
  display: block;
  font-size: 20px;
  color: #ffffff;
  padding: 15px;
}
.nav-two ul li a:hover {
  border-bottom: 4px solid yellow
}
</style>

