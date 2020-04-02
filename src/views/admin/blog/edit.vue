<!-- 博客编辑 -->
<template>
  <div class="blog-edit">
    <adminaside></adminaside>
    <adminheader></adminheader>
    <div class="blog-edit-main">
      <div class="blog-con">
        <el-form style="width: 100%; height:100%"
          :inline="true"
          :model="dataObj"
          :rules="rules"
          ref="blogRef"
          label-position="right">
          <el-row :gutter="24" style="padding-top: 1%; padding-left: 1%">
            <el-col :span="20">
              <el-form-item style="width: 100%" label="文章标题:" prop="blogTitle">
                <el-input style="width: 600px" size="small" v-model="dataObj.blogTitle" placeholder="文章标题" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="blog-editor" ref="editor"></div>
          <el-row :gutter="24" style="padding-top: 1%; padding-left: 1%">
            <el-col :span="20">
              <el-form-item style="width: 100%" label="文章分类:" prop="blogType">
                <el-select size="small" v-model="dataObj.blogType" placeholder="文章分类" style="width: 200px">
                  <el-option 
                    v-for="item in blogTypes"
                    :key="item.value"
                    :value="item.value"
                    :label="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="text-align: center; padding-top: 1%">
            <el-button style="width: 10%" type="primary" v-loading="loading" @click="insertClock()">提&nbsp;&nbsp;交</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import adminaside from '@/components/adminaside'
import adminheader from '@/components/adminheader'
import Editor from 'wangeditor'
import { insertBlog, getBlog, updateBlog, uploadImage } from '@/api/admin/blog'
export default {
    name: 'blogedit',
    components: {
      adminaside, 
      adminheader
    },

    data() {
      return {
        loading: false,
        dataObj: {
          id: 0,
          blogTitle: '',
          blogType: '',
          content: ''
        },
        rules: {
          blogTitle: [
            { required: true, message: '文章标题不能为空！', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '文章内容不能为空！', trigger: 'blur' }
          ],
          blogType: [
            { required: true, message: '文章类别不能为空！', trigger: 'blur' }
          ]
        },
        blogTypes: [
          { value: '1', label: 'Spring Boot' },
          { value: '2', label: 'Spring Cloud' },
          { value: '3', label: 'Java' },
          { value: '4', label: 'Python' }
        ]
      }
    },

    mounted() {
      this.getShop();
    },
    
    methods: {
      //详情
      getShop() {
        if(this.$route.query.onType == 'update' && this.$route.query.id != null) {
          this.dataObj.id = this.$route.query.id
          getShop({ id: this.dataObj.id }).then(response => {
            if (response.data.recode == 200) {
              this.dataObj = response.data.body.dataInfo
              this.dataObj.content = response.data.body.dataInfo.content
              this.initEditor()
            } else {
              this.$notify({
                title: '错误',
                message: response.data.remsg,
                type: 'error',
                position: 'top-right'
              });
            }
          }).catch(() => {});
        } else {
          console.log('添加')
          this.initEditor()
        }
      },

      //提交
      insertClock() {
        console.log(this.dataObj);
        this.$refs.blogRef.validate((valid) => {
          if (valid) {
            this.loading = true
            if (this.dataObj.id == 0) {
              insertBlog(this.dataObj).then(response => {
                if (response.data.recode == 200) {
                  this.$notify({
                    title: '成功',
                    message: '添加成功！',
                    type: 'success',
                    position: 'top-right'
                  });
                  this.loading = false
                  this.$router.go(-1)
                } else {
                  this.$notify({
                    title: '失败',
                    message: response.data.remsg,
                    type: 'error',
                    position: 'top-right'
                  });
                  this.loading = false
                }
              }).catch(reponse => {});
            } else {
              updateBlog(this.dataObj).then(response => {
                if (response.data.recode == 200) {
                  this.$notify({
                    title: '成功',
                    message: '修改成功！',
                    type: 'success',
                    position: 'top-right'
                  });
                  this.loading = false
                  this.$router.go(-1)
                } else {
                  this.$notify({
                    title: '失败',
                    message: response.data.remsg,
                    type: 'error',
                    position: 'top-right'
                  });
                  this.loading = false
                }
              }).catch(reponse => {});
            }
          }
        });
      },

      //初始化富文本
      initEditor() {
        var editor = new Editor(this.$refs.editor)   //富文本编辑器初始化时在 mounted() 方法中进行（create() 不行）
        // 自定义菜单配置
        //editor.customConfig.zIndex = 10
        // 文件上传
        editor.customConfig.customUploadImg = function(files, insert) {
          // files 是 input 中选中的文件列表
          // insert 是获取图片 url 后，插入到编辑器的方法
          files.forEach(image => {
            var data = new FormData()
            data.append('file', image)
            uploadImage(data).then(response => {
              insert(response.data.body.dataInfo)
            })
          })
        }
        editor.customConfig.onchange = (html) => {
          this.dataObj.content = html
        }
        editor.create()
        editor.txt.html(this.dataObj.content)
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

