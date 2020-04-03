<!-- web 首页 -->
<template>
  <div class="index">
    <homenav></homenav>
    <div class="con">
      <div class="content">
        <div class="con-left">
          <div class="left-li" v-for="item in dataList" v-loading="loading">
            <div class="li-title">
              <router-link :to="{ path: '/info', query: { id: item.id } }">{{ item.blogTitle }}</router-link>
            </div>
            <div class="li-info">{{item.blogTitle}}</div>
            <div class="li-footer">
              <span>{{ item.updateTime }}&nbsp;&nbsp;</span>
              <span>阅读数 {{ item.readNumber }}&nbsp;&nbsp;</span>
              <span>评论数 {{ item.commentNumber }}</span>
            </div>
          </div>
        </div>
        <div class="con-right">
          <div class="right-one">
            <span><a href="https://github.com/XGLLHZ"><img src="../../assets/github.png" style="width:14%; margin-left:25%"/></a></span>
            <span><a href="https://blog.csdn.net/XGLLHZ"><img src="../../assets/csdn.png" style="width:14%; margin-left:4%"/></a></span>
            <span><router-link to="/"><img src="../../assets/sina.png" style="width:14%; margin-left:4%"/></router-link></span>
          </div>
          <!-- <div class="right-two">
            <span>精选文章</span>
          </div>
          <div class="right-three">
            <div class="right-three-con">
              <div class="three-one">spring cloud 架构</div>
              <div class="three-two">深度剖析 spring cloud 架构 你像窝在被子里的舒服</div>
            </div>
            <div class="right-three-con">
              <div class="three-one">spring cloud 架构</div>
              <div class="three-two">深度剖析 spring cloud 架构 你像窝在被子里的舒服</div>
            </div>
            <div class="right-three-con">
              <div class="three-one">spring cloud 架构</div>
              <div class="three-two">深度剖析 spring cloud 架构 你像窝在被子里的舒服</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <homefooter></homefooter>
  </div>
</template>

<script>
import homenav from '@/components/homenav'
import homefooter from '@/components/homefooter'
import { getList } from '@/api/web/index'
export default {
    name: 'index',
    components: {
        homenav,
        homefooter
    },

    data() {
        return {
            loading: true,
            id: 0,
            dataList: [],
            blogType: 0
        }
    },

    created() {
      this.getLists()
    },

    methods: {
        //列表
        getLists() {
            this.blogType = this.$route.query.blogType
            getList({ blogType: this.blogType }).then(response => {
                this.dataList = response.data.body.dataList
                this.loading = false
            }).catch(() => {
                this.loading = false
            });
        },
    }

}
</script>

<style>
.index {
  width: 100%;
}
.con {
  margin-top: 40px;
  width: 100%;
  height: 800px;
}
.content {
  margin: 0px 10% 0px 10%;
  width: 80%;
}
.con-left {
  float: left;
  width: 70%;
}
.con-right {
  float: right;
  width: 30%;
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
.right-one {
  width: 100%;
  height: 60px;
}
.right-one img:hover {
  opacity: 0.8;
}
.right-two {
  width: 100%;
  height: 40px;
  text-align: center
}
.right-two span {
  font-size: 25px;
}
.right-three {
  margin-top: 5px;
  width: 100%;
}
.right-three-con {
  margin-bottom: 30px;
  width: calc(100% - 4px);
  height: 146px;
  border-radius: 10px;
  background-image: url('../../assets/springcloud.jpg');
  background-repeat: no-repeat;
  border: 2px solid #ffffff;
}
.three-one {
  width: 100%;
  height: 40%;
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  line-height: 60px;
}
.three-two {
  width: 100%;
  height: 60%;
  color: #ffffff;
  text-align: center;
  line-height: 40px
}
.right-three-con:hover {
  border: 2px solid peru;
}
</style>
