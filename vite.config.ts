/*
 * @Author: joesbell joesbell@163.com
 * @Date: 2022-06-07 15:22:04
 * @LastEditors: joesbell joesbell@163.com
 * @LastEditTime: 2022-07-26 15:05:47
 * @FilePath: /Graphics/vite.config.ts
 * @Description: vite配置文件
 */
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { tr } from 'element-plus/es/locale';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env,mode);
  
  return defineConfig({
    plugins: [vue(), DefineOptions()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@comp': path.resolve(__dirname, 'src/components'),
      },
    },
    // 预构建
    optimizeDeps:{
      include:[],
      exclude:[]
    },
    
    base: env.VITE_APP_BASE_URL||'/',
    css: {
      // css  Module按名导入
      modules:{
        localsConvention:'camelCaseOnly'
      },
      //css预处理
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/globalVariable.scss";',
          /*
            引入var.scss全局预定义变量，
            如果引入多个文件，
            可以使用
            '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
            这种格式
          */
        },
      },
    },
    server: {
      port: 2668,
	//   proxy:{
	// 	  '/js':{
	// 		  target:'xxxx',
	// 		  changeOrigin:true,
	// 		  rewrite:(path)=>path.replace(/^\/api/,"")
	// 	  },
	//   }
    },
  });
};
