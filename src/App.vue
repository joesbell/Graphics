<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'

// const loginState:GlobalType.g_state={
//     name:"hellowrold"
// }
// const localNumber:GlobalType.globalName='jiangsen'
</script>

<template>
  <LayoutHeader  foo='joesbell'/>
  <LayoutContent>
    
  </LayoutContent>

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
