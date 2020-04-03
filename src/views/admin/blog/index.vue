<!-- 博客页面 -->
<template>
  <div class="index-con">
        <adminaside></adminaside>
        <adminheader></adminheader>
        <div class="main-con">
            <div class="con-2">
                <div class="searchs">
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <el-date-picker
                            v-model="queryParams.searchTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            style="width:100%"
                            size="small">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="queryParams.blogTitle" placeholder="标题" clearable></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-select size="small" v-model="queryParams.blogType" placeholder="博客分类">
                                <el-option 
                                v-for="item in blogTypeOptions"
                                :key="item.value"
                                :value="item.value"
                                :label="item.label">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" type="primary" size="small" @click="search()">搜索</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" type="primary" size="small" @click="clear()" plain>重置</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="buttons">
                    <el-row :gutter="24">
                        <el-col :span="2">
                            <router-link :to="{ path: '/blogedit', query: { onType: 'insert', id: id } }">
                                <el-button style="width:100%; border: none" size="small" type="primary">新增</el-button>
                            </router-link>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="success" @click="search()">修改</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="danger" @click="search()">删除</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="success" v-loading="exportLoading" @click="exportExcel()">导出</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="tables">
                    <el-table
                    :data="tableData"
                    stripe
                    v-loading="loading"
                    style="width: 100%">
                        <el-table-column align="center" min-width="5" type="selection"/>
                        <el-table-column align="center" min-width="5" label="序号" type="index" fixed="left"/>
                        <el-table-column align="left" prop="blogTitle" label="文章标题" min-width="100">
                            <template slot-scope="scope">
                                <router-link :to="{ path: '/bloginfo', query: { id: scope.row.id } }" style="text-decoration: none;">
                                    <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #409EFF; cursor: pointer;">
                                        {{scope.row.blogTitle}}
                                    </span>
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="blogAuthor" label="作者" min-width="60">
                            <template slot-scope="scope">
                                <span>{{scope.row.blogAuthor}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="blogType" label="文章分类" min-width="60">
                            <template slot-scope="scope">
                                <span>{{blogTypes[scope.row.blogType]}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="readNumber" label="阅读人数" min-width="60">
                            <template slot-scope="scope">
                                <span>{{scope.row.readNumber}} 人</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="commentNumber" label="评论人数" min-width="60">
                            <template slot-scope="scope">
                                <span>{{scope.row.commentNumber}} 人</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="createTime" label="发表时间" min-width="80">
                            <template slot-scope="scope">
                                <span>{{ scope.row.createTime }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" fixed="right" label="操作" min-width="90">
                            <template slot-scope="scope">
                                <router-link style="text-decoration: none; color: #409EFF" :to="{ path: '/blogedit', query: { onType: 'update', id: scope.row.id } }">
                                    编辑
                                </router-link>
                                <span style="text-decoration: none; color: #409EFF; cursor: pointer;" @click="deleteBlog(scope.row.id)">删除</span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!--分页-->
                    <div class="block">
                        <el-pagination
                            style="text-align: center"
                            layout="total, sizes, prev, pager, next, jumper"
                            :page-sizes="[5, 10]"
                            :total="total"
                            :current-page="queryParams.currentPage"
                            :page-size="queryParams.pageSize"
                            @current-change="handleCurrentChange"
                            @size-change="handleSizeChange">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import adminaside from '@/components/adminaside'
import adminheader from '@/components/adminheader'
// import { moment } from 'moment'
import { getList, deleteBlog, exportBlog } from '@/api/admin/blog'
export default {
    name: 'blogindex',
    components: {
        adminaside,
        adminheader
    },

    data() {
        return {
            loading: true,
            exportLoading: false,
            tableData: [],
            total: 0,
            id: 0,
            queryParams: {
                currentPage: 1,
                pageSize: 10,
                blogTitle: '',
                blogType: '',
                searchTime: []
            },
            blogStatuss: [ '全部', '审核中', '未通过', '审核通过' ],
            blogTypes: ['全部', 'Spring Boot', 'Spring Cloud', 'Java', 'Python', 'Story'],
            blogTypeOptions: [
                { value: '1', label: 'Spring Boot' },
                { value: '2', label: 'Spring Cloud' },
                { value: '3', label: 'Java' },
                { value: '4', label: 'Python' },
                { value: '5', label: 'Story' }
            ]
        }
    },

    created() {
        this.getList();
    },

    methods: {
        //列表
        getList() {
            getList(this.queryParams).then(response => {
                this.tableData = response.data.body.dataList
                this.total = response.data.body.total
                this.loading = false
            }).catch(() => {
                this.loading = false
            });
        },

        //查询
        search() {
            this.loading = true
            this.getList()
        },

        //重置
        clear() {
            this.queryParams.searchTime = []
            this.queryParams.blogTitle = ''
            this.queryParams.blogType = ''
            this.loading = true
            this.getList()
        },

        //删除
        deleteBlog(id) {
            this.loading = true
            deleteBlog({ id: id }).then(response => {
                if (response.data.recode == 200) {
                    this.$notify({
                        title: '成功',
                        message: '删除成功！',
                        type: 'success',
                        position: 'top-right'
                    });
                } else {
                    this.$notify({
                        title: '错误',
                        message: response.data.body.remsg,
                        type: 'error',
                        position: 'top-right'
                    });
                }
            }).catch({});
            this.getList();
        },

        //导出
        exportExcel() {
            this.exportLoading = true
            exportBlog({ fileTitle: "博客信息表" }).then(response => {
                if (response.data.recode == 200) {
                    this.$notify({
                        title: '成功',
                        message: '导出成功！',
                        type: 'success',
                        position: 'top-right'
                    });
                    this.exportLoading = false
                } else {
                    this.$notify({
                        title: '错误',
                        message: response.data.body.remsg,
                        type: 'error',
                        position: 'top-right'
                    });
                    this.exportLoading = false
                }
            });
        },

        //改变当前页
        handleCurrentChange(val) {
            this.queryParams.currentPage = val
            this.getList()
        },

        //改变页面大小
        handleSizeChange(val) {
            this.queryParams.pageSize = val
            this.getList()
        }

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


