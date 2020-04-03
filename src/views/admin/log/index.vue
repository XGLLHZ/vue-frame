<!-- 操作日志页面 -->
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
                            <el-select size="small" v-model="queryParams.logType" placeholder="日志类型">
                                <el-option 
                                v-for="item in logTypeOptions"
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
                            <el-button style="width:100%; border: none" size="small" type="success" v-loading="exportLoading" @click="exportExcel()">导出</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="tables">
                    <el-table
                    :data="tableData"
                    stripe
                    v-loading="loading"
                    style="width: 100%"
                    size="medium">
                        <el-table-column align="center" min-width="5" type="selection"/>
                        <el-table-column align="center" min-width="5" label="序号" type="index" fixed="left"/>
                        <el-table-column align="center" prop="userName" label="用户名" min-width="60">
                            <template slot-scope="scope">
                                <span>{{scope.row.userName}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="operateName" label="操作名" min-width="100">
                            <template slot-scope="scope">
                                <span @click="getInfo(scope.row.id)" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #409EFF; cursor: pointer;">
                                    {{scope.row.operateName}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="requestApi" label="请求API" min-width="100">
                            <template slot-scope="scope">
                                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                                    {{scope.row.requestApi}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="requestTime" label="请求耗时" min-width="60">
                            <template slot-scope="scope">
                                <span>{{scope.row.requestTime}} ms</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="logType" label="日志类型" min-width="50">
                            <template slot-scope="scope">
                                <div v-if="scope.row.logType === 1">
                                    <span style="color: #606266">{{logTypes[scope.row.logType]}}</span>
                                </div>
                                <div v-if="scope.row.logType === 2">
                                    <span style="color: red">{{logTypes[scope.row.logType]}}</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="requestIp" label="IP" min-width="70">
                            <template slot-scope="scope">
                                <span>{{scope.row.requestIp}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="address" label="IP来源" min-width="60">
                            <template slot-scope="scope">
                                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                                    {{scope.row.address}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="browser" label="浏览器" min-width="80">
                            <template slot-scope="scope">
                                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                                    {{scope.row.browser}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="createTime" label="日志时间" min-width="80">
                            <template slot-scope="scope">
                                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                                    {{scope.row.createTime}}
                                </span>
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

        <el-dialog
            title="日志详情"
            :visible.sync="dialogVisible"
            width="80%"
            top="5%"
            append-to-body="true"
            @close="closeDialog()"
            v-loading="loading">
            <span>
                <div>方法名:</div>
                <div>{{className}}</div>
                <div>请求参数:</div>
                <div>{{requestParams}}</div>
                <div>异常详情:</div>
                <div>{{exceptionDetail}}</div>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
import adminaside from '@/components/adminaside'
import adminheader from '@/components/adminheader'
// import { moment } from 'moment'
import { getList, getLog } from '@/api/admin/log'
export default {
    name: 'logindex',
    components: {
        adminaside,
        adminheader
    },

    data() {
        return {
            loading: true,
            exportLoading: false,
            dialogVisible: false,
            tableData: [],
            total: 0,
            id: 0,
            queryParams: {
                currentPage: 1,
                pageSize: 10,
                logType: '',
                searchTime: []
            },
            logTypes: [ '全部', '正常', '异常'],
            logTypeOptions: [
                { value: '0', label: '全部' },
                { value: '1', label: '正常' },
                { value: '2', label: '异常' }
            ],
            className: '',
            requestParams: '',
            exceptionDetail: ''
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
            this.queryParams.currentPage = 1
            this.queryParams.pageSize = 10
            this.getList();
        },

        //重置
        clear() {
            this.queryParams.searchTime = []
            this.queryParams.logType = ''
            this.loading = true
            this.getList()
        },
        
        //详情
        getInfo(id) {
            console.log("日志详情");
            this.dialogVisible = true
            getLog({ id: id }).then(response => {
                this.className = response.data.body.dataInfo.className
                this.requestParams = response.data.body.dataInfo.requestParams
                this.exceptionDetail = response.data.body.dataInfo.exceptionDetail
                this.loading = false
            }).catch(() => {
                this.loading = false
            });
        },

        closeDialog() {
            this.dialogVisible = false
        },

        //导出
        exportExcel() {
            this.$notify({
                title: '错误',
                message: '抱歉，您没有导出权限！',
                type: 'error',
                position: 'top-right'
            });
            // this.exportLoading = true
            // exportBlog({ fileTitle: "博客信息表" }).then(response => {
            //     if (response.data.recode == 200) {
            //         this.$notify({
            //             title: '成功',
            //             message: '导出成功！',
            //             type: 'success',
            //             position: 'top-right'
            //         });
            //         this.exportLoading = false
            //     } else {
            //         this.$notify({
            //             title: '错误',
            //             message: response.data.body.remsg,
            //             type: 'error',
            //             position: 'top-right'
            //         });
            //         this.exportLoading = false
            //     }
            // });
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


