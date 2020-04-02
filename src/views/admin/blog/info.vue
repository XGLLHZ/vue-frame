<!-- 博客详情页面 -->
<template>
  <div class="index-con">
        <adminaside></adminaside>
        <adminheader></adminheader>
        <div class="main-con">
            <div class="con-2">
                <div class="searchs">
                    <el-row :gutter="24">
                        <el-col :span="20">
                            <div></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import adminaside from '@/components/adminaside'
import adminheader from '@/components/adminheader'
// import { moment } from 'moment'
import { getBlog } from '@/api/admin/blog'
export default {
    name: 'logindex',
    components: {
        adminaside,
        adminheader
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
.index-con {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #F4F5F8;
}
.main-con {
    margin-left: 17%;
    padding-top: 75px;
    width: 81%;
    height: 100%;
    background-color: #F4F5F8;
}
.con-2 {
    width: 100%;
    height: 87%;
    background-color: white;
    text-align: left;
}
.searchs {
    padding-top: 1%;
    padding-left: 1%;
    width: 100%;
    height: 6%;
}
.buttons {
    padding-top: 1%;
    padding-left: 1%;
    width: 100%;
    height: 6%;
}
.tables {
    padding-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
    width: 98%;
    height: 80%;
}
.block {
    padding-top: 2%;
}
</style>


