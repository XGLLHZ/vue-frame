<!-- 页面底部组件 -->
<template>
  <div class="homefooter">
    <div class="recode">
      <div class="recode-one">
        <img src="../assets/recode.jpeg">
      </div>
      <div class="recode-two"><span>扫描微信二维码&nbsp;&nbsp;关注公众号 "香格里拉皇子"</span></div>
    </div>
    <div class="footer-info">
        <span><router-link to="/">津ICP备18006982号-1</router-link></span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'homefooter'
}
</script>

<style>
.homefooter {
  width: 100%;
}
.recode {
  width: 100%;
  text-align: center;
}
.recode-one img {
  width: 15%;
}
.recode-two {
  margin-bottom: 40px;
}
.footer-info {
  width: 100%;
  height: 150px;
  background-color: #181818;
  text-align: center;
}
.footer-info a {
  margin-left: 20px;
  margin-right: 20px;
  color:gray;
  font-size: 15px;
  text-decoration: none;
  line-height: 70px;
}
</style>

