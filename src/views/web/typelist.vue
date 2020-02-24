<!-- 列表页 -->
<template>
  <div class="typelist">
      <homenav></homenav>
      <div class="main-list">
          <div class="con-left">
            <div class="left-li">
                <div class="li-title">
                    <router-link to="/info">spring boot 集成 redis</router-link>
                </div>
                <div class="li-info">前言：我是文章简介巴拉巴拉一大堆阿斯达大大大大大大所大大所大大所大大所大所大所大大所大所大递四方速递水电费递四方速递放松放松第三方士大夫士大夫是发送到发送到发送到水电费第三方第三方第三方水电费水电费水电费胜多负少的但是</div>
                <div class="li-footer">
                    <span>2020-02-24 16:44&nbsp;&nbsp;</span>
                    <span>阅读数 29&nbsp;&nbsp;</span>
                    <span>评论数 4</span>
                </div>
            </div>
            <div class="left-li">
                <div class="li-title">
                    <router-link to="/">spring boot 集成 redis</router-link>
                </div>
                <div class="li-info">前言：我是文章简介巴拉巴拉一大堆阿斯达大大大大大大所大大所大大所大大所大所大所大大所大所大递四方速递水电费递四方速递放松放松第三方士大夫士大夫是发送到发送到发送到水电费第三方第三方第三方水电费水电费水电费胜多负少的但是</div>
                <div class="li-footer">
                    <span>2020-02-24 16:44&nbsp;&nbsp;</span>
                    <span>阅读数 29&nbsp;&nbsp;</span>
                    <span>评论数 4</span>
                </div>
            </div>
            <div class="left-li">
                <div class="li-title">
                    <router-link to="/">spring boot 集成 redis</router-link>
                </div>
                <div class="li-info">前言：我是文章简介巴拉巴拉一大堆阿斯达大大大大大大所大大所大大所大大所大所大所大大所大所大递四方速递水电费递四方速递放松放松第三方士大夫士大夫是发送到发送到发送到水电费第三方第三方第三方水电费水电费水电费胜多负少的但是</div>
                <div class="li-footer">
                    <span>2020-02-24 16:44&nbsp;&nbsp;</span>
                    <span>阅读数 29&nbsp;&nbsp;</span>
                    <span>评论数 4</span>
                </div>
            </div>
        </div>
      </div>
      <homefooter></homefooter>
  </div>
</template>

<script>
import homenav from '@/components/homenav'
import homefooter from '@/components/homefooter'
export default {
    name: 'typelist',
    components: {
        homenav,
        homefooter
    }
}
</script>

<style>
.typelist {
    width: 100%;
}
.main-list {
    width: 80%;
    margin: 40px 10% 40px 10%;
}
.left-li {
  width: 95%;
  height: 150px;
  border-bottom: 1px solid #ddd;
}
.li-title {
  margin-left: 5px;
  width: 100%;
  height: 85px;
  font-size: 23px;
  font-family: 'SimHei';
  line-height: 100px;
}
.li-title a {
  color: peru;
  text-decoration: none;
}
.li-info {
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
  height: 35px;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.li-footer {
  margin-left: 5px;
  width: 100%;
  height: 30px;
  color: #999;
  font-size: 13px;
}
.li-title a:hover {
  border-bottom: 4px solid peru;
}
</style>

