<!--
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-07-28 11:24:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-29 14:30:08
 * @FilePath: /Graphics/src/components/test.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';

defineOptions({
  name: 'test',
});
interface Props {
  foo: string;
}

const props = defineProps<Props>();
</script>

<template></template>

<style scoped lang="scss"></style>
