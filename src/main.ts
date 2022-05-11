import { createApp } from 'vue';
import { Router } from './router';
import ElementPlus from 'element-plus';
import print from 'vue3-print-nb';
import 'element-plus/dist/index.css';
import App from './App.vue';
createApp(App).use(Router).use(ElementPlus).use(print).mount('#app');
