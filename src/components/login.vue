<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-15 15:02:22
 * @FilePath: /Graphics/src/components/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue'
import {useRoute,useRouter} from 'vue-router';
import type {FormInstance,FormRules} from 'element-plus';
const router=useRouter();
const route=useRoute();

//  模块热重载监听回调
if(import.meta.hot){
  // 热更新时候一些模块副作用的清除，比如定时器
  import.meta.hot.dispose(()=>{
    if(timer){
      clearInterval(timer)
    }
  })
  import.meta.hot.accept(()=>{
    console.log(333);
  })
}
defineOptions({
name:"Login"
})
const ruleFormRef=ref<FormInstance>();
const ruleForm=reactive({
  Phone:'12',
  PassWord:''
})
let count=0;
let timer=setInterval(()=>{
  count++;
  console.log(count);

},1000)

const rules=reactive<FormRules>({
  Phone:[
    {required:true,message:"不能为空",trigger:'blur'},
    {pattern:/^1[3456789]\d{9}$/,message:'请输入正确手机号',trigger:'blur'}
  ],
  PassWord:[
    {required:true,message:"不能为空",trigger:'blur'}
  ]
})
const submitForm=async(formEl:FormInstance|undefined)=>{
  if(!formEl) return;
  await formEl?.validate((valid,fields)=>{
    if(valid){
      router.push({
        path:'./home'
      })
    }else{
      console.log('error');
      
    }
  })
}
</script>

<template>
<div class="login_wrap">
<div class="loginBox">
  <el-card style='background-color:transparent;' shadow="always"> 
  <el-form
  ref="ruleFormRef"
  :model="ruleForm"
  :rules="rules"
  label-width="100px"
  status-icon
  >
  <el-form-item  label="Phone" prop="Phone">
    <el-input v-model="ruleForm.Phone"></el-input>
  </el-form-item>
  <el-form-item label="PassWord" prop="PassWord">
    <el-input v-model="ruleForm.PassWord"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleFormRef)">
    Login
    </el-button>
  </el-form-item>
  </el-form>
  </el-card>
  </div>
</div>

</template>

<style scoped lang="scss">
.login_wrap{
    display: flex;
  justify-content: left;
  width: 100%;
  height: 100%;
  background-image: url("../assets/WechatIMG1.jpeg");
  background-size: cover;
}
.loginBox{
  margin-left: 50px;
  margin-top: 100px;
  width:400px;
  height: 300px;
}

</style>