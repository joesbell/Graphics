<script setup lang="ts">
import {
  ref,
  reactive,
  toRefs,
  computed,
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
