/* eslint @typescript-eslint/no-var-requires: "off" */

import { IConfig } from 'umi-types';

const path = require("path");

function join(dest) {
  return path.resolve(__dirname, dest);
}

// ref: https://umijs.org/config/
const config: IConfig =  {
  // outputPath:join("../cloud_nvr_web/priv/static/assets"),
  outputPath: '../cloud_nvr_web/priv/static/assets',
  base: 'front',
  publicPath: '/assets/',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'cloud_nvr_front',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
