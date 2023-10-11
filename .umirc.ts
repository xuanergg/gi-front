export default {
  base: './',
  publicPath: './',
  history: {
    type: 'hash'
  },
  favicon: '/assets/favicon.png',

  nodeModulesTransform: {
    type: "none",
  },
  routes: [{ exact: true, path: "/", title: 'Graph Search',component: "@/pages/index" }],
  // antd: {
  //   dark: false,
  //   compact: true,
  // },
  mfsu: false,
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "@antv/graphin": "Graphin",
    "@antv/g6": "G6",
    antd: "antd",
  },
  scripts: [
    "https://gw.alipayobjects.com/os/lib/babel/standalone/7.19.2/babel.min.js",
    //  <!--- REACT DEPENDENCIES-->
    "https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.production.min.js",
    "https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.production.min.js",
    "https://gw.alipayobjects.com/os/lib/localforage/1.10.0/dist/localforage.min.js",
    //  <!--- Antd DEPENDENCIES-->
    "https://gw.alipayobjects.com/os/lib/lodash/4.17.21/lodash.min.js",
    "https://gw.alipayobjects.com/os/lib/antd/4.24.8/dist/antd.min.js",
    //  <!--- Graphin DEPENDENCIES-->
    "https://gw.alipayobjects.com/os/lib/antv/g6/4.8.14/dist/g6.min.js",
    "https://gw.alipayobjects.com/os/lib/antv/graphin/2.7.25/dist/graphin.min.js",
    //  <!--- G2/G2Plot DEPENDENCIES-->
    "https://gw.alipayobjects.com/os/lib/antv/g2plot/2.4.16/dist/g2plot.min.js",
    //  <!--- GI DEPENDENCIES-->
    "https://gw.alipayobjects.com/os/lib/antv/gi-sdk/2.4.10/dist/index.min.js",

  ],
  styles: [
    "https://gw.alipayobjects.com/os/lib/antv/graphin/2.7.25/dist/index.css",
    "https://gw.alipayobjects.com/os/lib/antv/gi-sdk/2.4.10/dist/index.css",
    // "https://gw.alipayobjects.com/os/lib/antd/4.24.8/dist/antd.css",
    "https://gw.alipayobjects.com/os/lib/antv/gi-theme-antd/0.1.0/dist/light.css",
  ],
  devServer: {
    proxy: {
      '/fmea': {
        target: 'http://localhost:8088',
        'changeOrigin': true,
        'pathRewrite': { '^/fmea' : '' },
      },
    },
  },
};
