<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-09 14:58:16
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-10 15:58:56
 * @FilePath: /Graphics/src/components/contntChild.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, inject } from 'vue';
import { state } from '../state';
defineOptions({
  name: 'contentChild',
});

interface baseData {
  id: string;
  date: string;
  name: string;
  address: string;
}
const tableData = <baseData[]>inject('table');
const tab = inject('tab');
console.log(tableData, tab);

// const delId=inject('delId') as (index:number)=>baseData[];
// console.log(delId);

interface Props {
  userName: string;
}
interface emit {
  (e: 'update:userName', userName: string): void;
}
const emit = defineEmits<emit>();
const props = defineProps<Props>();

console.log(props.userName);

const handleDelete = (index: number, row: baseData) => {
  tableData.splice(index, 1);
  emit('update:userName', 'ddggg');
  state.userId = 'changeState';
  // props.tableData.splice(index,1)
};
</script>

<template>
  <el-table row-key="id" :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column align="right">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss"></style>
