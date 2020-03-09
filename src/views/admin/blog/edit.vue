<!-- 博客编辑 -->
<template>
  <div class="blog-edit">
    <adminaside></adminaside>
    <adminheader></adminheader>
    <div class="blog-edit-main">
      <div class="blog-con">
        <el-row :gutter="24" style="padding-top: 1%; padding-left: 1%; line-height: 3">
          <el-col :span="1.1">
            <span style="width: 100%">文章标题:</span>
          </el-col>
          <el-col :span="20">
            <el-input size="small" v-model="blogTitle" placeholder="文章标题" clearable></el-input>
          </el-col>
        </el-row>
        <div class="blog-editor" ref="editor"></div>
        <el-row :gutter="24" style="padding-top: 1%; padding-left: 1%; line-height: 3">
          <el-col :span="1.1">
            <span style="width: 100%">文章分类:</span>
          </el-col>
          <el-col :span="20">
            <el-select size="small" v-model="blogType" placeholder="文章分类" style="width: 25%">
              <el-option 
                v-for="item in blogTypes"
                :key="item.value"
                :value="item.value"
                :label="item.label">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <div style="text-align: center; padding-top: 1%">
          <el-button style="width: 10%" type="primary" @click="insertClock()">提&nbsp;&nbsp;交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminaside from '@/components/adminaside'
import adminheader from '@/components/adminheader'
import Editor from 'wangeditor'
export default {
    name: 'blogedit',
    components: {
      adminaside, 
      adminheader
    },

    data() {
      return {
        loading: true,
        blogTitle: '',
        blogType: '',
        editorContent: '',
        blogTypes: [
          { value: '1', label: 'Spring Boot' },
          { value: '2', label: 'Spring Cloud' },
          { value: '3', label: 'Java' },
          { value: '4', label: 'Python' }
        ]
      }
    },

    mounted() {
      console.log('博客管理新增');
      var editor = new Editor(this.$refs.editor)   //富文本编辑器初始化时在 mounted() 方法中进行（create() 不行）
      // 自定义菜单配置
      //editor.customConfig.zIndex = 10
      // 文件上传
      //editor.customConfig.customUploadImg = function(files, insert) {
        // files 是 input 中选中的文件列表
        // insert 是获取图片 url 后，插入到编辑器的方法
        // files.forEach(image => {
        //   upload(_this.imagesUploadApi, image).then(data => {
        //     insert(data.data.url)
        //   })
        // })
      //}
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
      //editor.txt.html(this.editorContent)
    },
    
    methods: {
      //提交
      insertClock() {
        console.log(this.editorContent);
      }

    }
}
</script>

<style>
.blog-edit {
  width: 100%;
  height: 1300px;
  background-color: #F4F5F8;
}
.blog-edit-main {
  padding-top: 5%;
  margin-left: 17%;
  width: 81%;
  height: 100%;
  background-color: #F4F5F8;
}
.blog-con {
  width: 100%;
  height: 87%;
  background-color: white;
  text-align: left;
}
.blog-editor {
  padding-top: 1%;
  padding-left: 2%;
  width: 89%;
  height: 60%;
}
.w-e-text-container {
    height: 95% !important;  /* !important是重点，因为原div是行内样式设置的高度300px */
  }
</style>

