<!-- 详情页 -->
<template>
  <div class="info">
      <homenav></homenav>
      <div class="info-con">
          <div class="con-main">
              <div v-html="dataInfo.content"></div>
          </div>
      </div>
      <homefooter></homefooter>
  </div>
</template>

<script>
import homenav from '@/components/homenav'
import homefooter from '@/components/homefooter'
import { getBlog } from '@/api/web/index'
export default {
    name: 'info',
    components: {
        homenav,
        homefooter
    },

    data() {
        return {
            id: 0,
            loading: true,
            dataInfo: {}
        }
    },

    created() {
        this.getBlog();
    },

    methods: {
        //详情
        getBlog() {
            this.id = this.$route.query.id
            getBlog({ id: this.id }).then(response => {
                this.dataInfo = response.data.body.dataInfo
                this.loading = false
            }).catch(() => {
                this.loading = false
            });
        },

    }

}
</script>

<style>
.info {
    width: 100%;
}
.info-con {
    width: 100%;
}
.con-main {
    margin: 40px 10% 40px 10%;
    padding-bottom: 40px;
    width: 80%;
    border-bottom: 3px solid yellow;
}
</style>
