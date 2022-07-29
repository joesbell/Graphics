<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-29 14:28:53
 * @FilePath: /Graphics/src/components/LayoutHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import {
  ref,
  reactive,
  toRefs,
  watch,
  watchEffect,
  onMounted,
} from 'vue';
interface test {
  name: string;
  age: number;
}

const title = ref('我是header');
watch([title], () => {
  console.log(title.value);
});
setTimeout(() => {
  title.value = title.value + '11111';
}, 1000);

const state = reactive<test>({
  name: 'jiangsen',
  age: 235,
});
const { name, age } = toRefs(state);
interface Props {
  foomsg: string;
}

const props = defineProps<Props>();
console.log(props.foomsg);
</script>

<template>
  <div>{{ title }}---{{ name }}---{{ age }}---{{ foomsg }}</div>
</template>
