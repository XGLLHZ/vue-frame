<!-- 管理系统左边菜单栏 -->
<template>
    <div class="admin-aside">
        <div class="aside-title">
            <span><span style="color: yellow">0_0 XGLLHZ </span>管理系统</span>
        </div>
        <div class="aside-menu">
            <el-menu default-active="1" active-text-color="#ffff00" background-color="#181818" text-color="#F4F5F8">
                <router-link to="/system" style="text-decoration: none; color: #F4F5F8;">
                    <el-menu-item index="1"><i class="el-icon-document"/>首页</el-menu-item>
                </router-link>
                <router-link to="/blogindex" style="text-decoration: none; color: #F4F5F8;">
                    <el-menu-item index="2"><i class="el-icon-document"/>博客管理</el-menu-item>
                </router-link>
                <!-- <router-link to="/typeindex" style="text-decoration: none; color: #F4F5F8;">
                    <el-menu-item index="3"><i class="el-icon-document"/>类别管理</el-menu-item>
                </router-link> -->
                <router-link to="/logindex" style="text-decoration: none; color: #F4F5F8;">
                    <el-menu-item index="4"><i class="el-icon-document"/>操作日志</el-menu-item>
                </router-link>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-document"/>权限管理</template>
                    <router-link to="/system" style="text-decoration: none; color: #F4F5F8;">
                        <el-menu-item index="4-1"><i class="el-icon-user"/>用户管理</el-menu-item>
                    </router-link>
                    <router-link to="/system" style="text-decoration: none; color: #F4F5F8;">
                        <el-menu-item index="4-2"><i class="el-icon-user"/>角色管理</el-menu-item>
                    </router-link>
                    <router-link to="/system" style="text-decoration: none; color: #F4F5F8;">
                        <el-menu-item index="4-3"><i class="el-icon-user"/>权限管理</el-menu-item>
                    </router-link>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'adminaside'
}
</script>

<style>
.admin-aside {
    width: 15%;
    height: 100%;
    position: fixed;
    background-color: #181818;
}
.aside-title {
    width: 100%;
    height: 7%;
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #999;
}
.aside-title span {
    line-height: 55px;
}
.aside-menu {
    width: 100%;
    height: 93%;
    color: #F4F5F8;
    font-weight: 200;
}
.el-menu-item {
    line-height: 50px;
}
.el-submenu {
    line-height: 50px;
    text-decoration: none;
}
/* .el-submenu:hover {
    cursor: pointer;
    background-color: #1f2d3d;
}
.el-menu-item:hover {
    cursor: pointer;
    background-color: #1f2d3d;
} */
</style>





