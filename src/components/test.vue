<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';

defineOptions({
  name: 'xxx',
});
interface Props {
  foo: string;
}

const props = defineProps<Props>();
</script>

<template></template>

<style scoped lang="scss"></style>
