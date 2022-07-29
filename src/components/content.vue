<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-08 09:45:10
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-29 14:29:15
 * @FilePath: /Graphics/src/components/content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import contentChild from './contentChild.vue';
import { state } from '../state';
import { useStore } from '@/stores';
import {
  ref,
  reactive,
  watch,
  onMounted,
  toRefs,
  provide,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const store = useStore();
console.log(route.matched);

defineOptions({
  name: 'Content',
});
const goLogin = () => {
  router.push({
    name: 'login',
  });
};
const nameStr = ref('jiangsen');
const data = reactive({
  userName: 'jiangsen',
  tableData: [
    {
      id: '1',
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: '2',
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: '3',
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: '4',
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
});
// const {tableData}=toRefs(data)
// console.log(tableData);

provide('table', data.tableData);
provide('tab', nameStr);

// const delId=(id:number)=>{
//  return tableData.value.splice(id,1)
// }
// provide("delId",delId)
const change = () => {
  data.tableData.push({
    id: '5',
    date: 'xxxx',
    name: 'xxxx',
    address: 'xxxxxxxx',
  });
};
</script>

<template>
  <content-child v-model:user-name="data.userName" />
  <div>{{ data.userName }}</div>
  <div>{{ state.userId }}</div>
  <div>{{ store.message }}</div>
  <el-button @click="change">新增数据</el-button>
  <el-button @click="goLogin">回登陆</el-button>
</template>

<style scoped lang="scss"></style>
