/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-09 14:18:28
 * @FilePath: /Graphics/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router';
// import component from '../env';

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import("@comp/login.vue"),
  },
  {
    path: '/home',
    name:'home',
    component: ()=>import("@comp/home.vue"),
    children:[
      {
        path: '/home',
        redirect:{
          name:'content',
        }
      },
      {
        path: 'content',
        name:'content',
        component: ()=>import("@comp/content.vue")
      },
      {
        path: 'dataBase',
        name:'dataBase',
        component: ()=>import("@comp/dataBase.vue")
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/404.vue')
  }
]; 
export const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});
