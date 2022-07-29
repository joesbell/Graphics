/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-30 16:08:21
 * @FilePath: /Graphics/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import { Router } from './router';
import {createPinia} from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
const modules = import.meta.glob('./assets/glob/*')

Object.entries(modules).forEach(([key,val])=>{
    val().then((module)=>{
        console.log(module);
        
    })
})
createApp(App).use(createPinia()).use(Router).use(ElementPlus).mount('#app');
 