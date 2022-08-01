<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-09 14:16:00
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-29 14:46:21
 * @FilePath: /Graphics/src/components/dataBase.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { box, imgBox } from '@/assets/scss/imp.module.css';
import wchat from '@/assets/WechatIMG1.jpeg?url';
import dataJson from '@/assets/glob/data.json';
import MyWorker from '@/assets/worker?worker';
const router = useRouter();
const route = useRoute();
console.log(route.matched, router);
defineOptions({
  name: 'data-base',
});
const a = 143;
console.log(a);

const work = new MyWorker();
work.onmessage = (e) => {
  console.log(e.data);
};
const pick = () => {
  console.log(dataJson);
};
</script>

<template>
  <div class="mainBox">
    主体内容区
    <el-button @click="pick">点击</el-button>
  </div>
  <div :class="box">
    <img :class="imgBox" :src="wchat" alt="" />
  </div>
</template>

<style scoped lang="scss">
.mainBox {
  color: $color;
}
</style>
