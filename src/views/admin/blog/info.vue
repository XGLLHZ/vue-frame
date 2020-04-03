<!-- 博客详情页面 -->
<template>
  <div class="blog-info">
        <adminaside></adminaside>
        <adminheader></adminheader>
        <div class="blog-info-main">
            <div class="blog-info-2">
                <div class="blog-info-searchs">
                    <el-row :gutter="24">
                        <el-col :span="20">
                            <span>文章标题: {{ dataInfo.blogTitle }}</span>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" style="padding-top: 1%; color: #777; font-size: 13px">
                        <el-col :span="4">
                            <span>作者: {{ dataInfo.blogAuthor }}</span>
                        </el-col>
                        <el-col :span="4">
                            <span>阅读人数: {{ dataInfo.readNumber }} 人</span>
                        </el-col>
                        <el-col :span="4">
                            <span>评论人数: {{ dataInfo.commentNumber }} 人</span>
                        </el-col>
                    </el-row>
                    <div style="padding-top: 1%; color: #777" v-html="dataInfo.content"></div>
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
.blog-info {
    width: 100%;
    height: 100%;
    background-color: #F4F5F8;
}
.blog-info-main {
    margin-left: 17%;
    padding-top: 75px;
    width: 81%;
    height: 100%;
    background-color: #F4F5F8;
}
.blog-info-2 {
    width: 100%;
    height: 87%;
    background-color: white;
    text-align: left;
}
.blog-info-searchs {
    padding-top: 1%;
    padding-left: 1%;
    width: 100%;
}
</style>


