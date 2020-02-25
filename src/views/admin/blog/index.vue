<!-- 博客页面 -->
<template>
  <div class="index-con">
        <adminaside></adminaside>
        <adminheader></adminheader>
        <div class="main-con">
            <div class="con-1">
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
    height: 800px;
    background-color: #F4F5F8;
}
.con-1 {
    width: 100%;
    height: 500px;
    background-color: white;
    text-align: center;
}
</style>


