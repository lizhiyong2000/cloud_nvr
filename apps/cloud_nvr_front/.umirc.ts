/* eslint @typescript-eslint/no-var-requires: "off" */

import { defineConfig } from 'umi';

export default defineConfig({

  antd:{},

  outputPath: '../cloud_nvr_web/priv/static/assets',
  base: 'front',
  publicPath: '/assets/',

  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/devices/index',
          component: './devices/index',
        },
        {
          path: '/',
          component: '../pages/index',
        },
        {
          path: '/login',
          component: '../pages/users/login',
        },
        {
          path: '/users/',
          component: '../pages/users/list',
        },
        {
          path: '/users/:id',
          component: '../pages/users/[id]',
        },

      ],
    },
  ],
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
});


// import { IConfig } from 'umi-types';
//
// const path = require('path');
//
// function join(dest) {
//   return path.resolve(__dirname, dest);
// } // ref: https://umijs.org/config/
//
// const config: IConfig = {
//   // outputPath:join("../cloud_nvr_web/priv/static/assets"),
//   // ssr: {},
//   outputPath: '../cloud_nvr_web/priv/static/assets',
//   base: 'front',
//   publicPath: '/assets/',
//   treeShaking: true,
//   routes: [
//     {
//       path: '/',
//       component: '../layouts/index',
//       routes: [
//         {
//           path: '/devices/index',
//           component: './devices/index',
//         },
//         {
//           path: '/',
//           component: '../pages/index',
//         },
//         {
//           path: '/login',
//           component: '../pages/users/login',
//         },
//         {
//           path: '/users/:id',
//           component: '../pages/users/[id]',
//         },
//         {
//           path: '/users/list',
//           component: '../pages/users/list',
//         },
//       ],
//     },
//   ],
//   plugins: [
//     // ref: https://umijs.org/plugin/umi-plugin-react.html
//     [
//       'umi-plugin-react',
//       {
//         dynamicImport: false,
//         title: 'cloud_nvr_front',
//         dll: false,
//         locale: {
//           enable: true,
//           default: 'en-US',
//         },
//         routes: {
//           exclude: [
//             /models\//,
//             /services\//,
//             /model\.(t|j)sx?$/,
//             /service\.(t|j)sx?$/,
//             /components\//,
//           ],
//         },
//       },
//     ],
//   ],
// };
// export default config;
