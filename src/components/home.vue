<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-09 14:17:06
 * @FilePath: /Graphics/src/components/home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterView,RouterLink} from "vue-router"
import { ref, reactive, computed, watch, onMounted } from 'vue'
defineOptions({
  name:"Home"
})

</script>

<template>
<div class="navBar">
  <router-link to="/home/content">content</router-link>
  <router-link to="/home/dataBase">dataBase</router-link>

</div>
<div>
  <router-view />
</div>
</template>

<style scoped lang="scss">
  .l_content{
    width: 100px;
    height: 100px;
    border: 1px solid #ddd;
  }
</style>