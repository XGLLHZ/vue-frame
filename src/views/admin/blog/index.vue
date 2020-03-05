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
                            v-model="startTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            format="yyyy-MM-dd"
                            value-format="timestamp"
                            style="width:100%"
                            size="small">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="title" placeholder="标题" clearable></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-select size="small" v-model="blogType" placeholder="博客分类">
                                <el-option 
                                v-for="item in blogTypes"
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
                            <el-button style="width:100%; border: none" type="primary" size="small" @click="search()" plain>重置</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="buttons">
                    <el-row :gutter="24">
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="primary" @click="search()">新增</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="success" @click="search()">修改</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="danger" @click="search()">删除</el-button>
                        </el-col>
                        <el-col :span="2">
                            <el-button style="width:100%; border: none" size="small" type="success" @click="search()">导出</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="tables">
                    <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                        <el-table-column align="center" min-width="5" type="selection"/>
                        <el-table-column align="center" min-width="5" label="序号" type="index"/>
                        <el-table-column align="left" prop="blogTitle" label="文章标题" min-width="60"/>
                        <el-table-column align="center" prop="blogType" label="文章分类" min-width="60"/>
                        <el-table-column align="center" prop="readeNumbers" label="阅读人数" min-width="60"/>
                        <el-table-column align="center" fixed="right" label="操作" min-width="30">
                            <el-button type="primary" size="mini" >编辑</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import adminaside from '@/components/adminaside'
import adminheader from '@/components/adminheader'
export default {
    name: 'blogindex',
    components: {
        adminaside,
        adminheader
    },

    data() {
        return {
            startTime: '',
            title: '',
            blogType: '',
            blogTypes: [
                { value: '1', label: 'Spring Boot' },
                { value: '2', label: 'Spring Cloud' },
                { value: '3', label: 'Java' },
                { value: '4', label: 'Python' }
            ],
            tableData: [
                { blogTitle: 'spring boot 集成 redis', blogType: 'spring boot', readeNumbers: 34 },
                { blogTitle: 'docker 部署 spring boot', blogType: 'docker', readeNumbers: 1231 },
                { blogTitle: 'docker + nginx + obs', blogType: 'docker', readeNumbers: 24 },
                { blogTitle: '初识 spring cloud', blogType: 'spring cloud', readeNumbers: 345 },
                { blogTitle: 'spring boot', blogType: 'spring boot', readeNumbers: 34 }
            ]
        }
    },

    created() {
        console.log('博客管理页测试');
    },

    methods: {
        search() {
            console.log(this.startTime);
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
</style>


