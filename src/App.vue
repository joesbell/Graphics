<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-08 13:50:43
 * @FilePath: /Graphics/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { ref, reactive, computed, watch, onMounted } from 'vue';

defineOptions({
  name: 'App',
});
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
