/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-10 13:44:35
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-06-10 13:55:14
 * @FilePath: /Graphics/src/stores/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {defineStore} from 'pinia';
export const useStore=defineStore({
    id:'main',
    state:()=>({
        message:"storeMessage"
    })
})