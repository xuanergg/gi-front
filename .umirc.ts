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
    {src:"/js/gw.alipayobjects.com_os_lib_babel_standalone_7.19.2_babel.min.js"},
    //  <!--- REACT DEPENDENCIES-->
    {src:"/js/gw.alipayobjects.com_os_lib_react_17.0.2_umd_react.production.min.js"},
    {src:"/js/gw.alipayobjects.com_os_lib_react-dom_17.0.2_umd_react-dom.production.min.js"},
    {src:"/js/gw.alipayobjects.com_os_lib_localforage_1.10.0_dist_localforage.min.js"},
    //  <!--- Antd DEPENDENCIES-->
    {src:"/js/gw.alipayobjects.com_os_lib_lodash_4.17.21_lodash.min.js"},
    {src:"/js/gw.alipayobjects.com_os_lib_antd_4.24.8_dist_antd.min.js"},
    //  <!--- Graphin DEPENDENCIES-->
    {src:"/js/gw.alipayobjects.com_os_lib_antv_g6_4.8.14_dist_g6.min.js"},
    {src:"/js/gw.alipayobjects.com_os_lib_antv_graphin_2.7.25_dist_graphin.min.js"},
    //  <!--- G2/G2Plot DEPENDENCIES-->
    {src:"/js/gw.alipayobjects.com_os_lib_antv_g2plot_2.4.16_dist_g2plot.min.js"},
    //  <!--- GI DEPENDENCIES-->
    {src:"/js/gw.alipayobjects.com_os_lib_antv_gi-sdk_2.4.10_dist_index.min.js"},

    {src:"/js/gw.alipayobjects.com_os_lib_antv_gi-assets-advance_2.5.8_dist_index.min.js"},
    {src:"/js/gw.alipayobjects.com_os_lib_antv_gi-assets-basic_2.4.9_dist_index.min.js"},
    {src:"/js/gw.alipayobjects.com_os_lib_antv_gi-assets-scene_2.2.7_dist_index.min.js"},
  ],
  styles: [
    "https://gw.alipayobjects.com/os/lib/antv/graphin/2.7.25/dist/index.css",
    "https://gw.alipayobjects.com/os/lib/antv/gi-sdk/2.4.10/dist/index.css",
    // "https://gw.alipayobjects.com/os/lib/antd/4.24.8/dist/antd.css",
    "https://gw.alipayobjects.com/os/lib/antv/gi-theme-antd/0.1.0/dist/light.css",

    "https://gw.alipayobjects.com/os/lib/antv/gi-assets-advance/2.5.8/dist/index.css",
    "https://gw.alipayobjects.com/os/lib/antv/gi-assets-basic/2.4.9/dist/index.css",
    "https://gw.alipayobjects.com/os/lib/antv/gi-assets-scene/2.2.7/dist/index.css"

  ],
  devServer: {
    proxy: {
      '/fmeakg': {
        target: 'http://localhost:8088',
        'changeOrigin': true,
        'pathRewrite': { '^/fmeakg' : '' },
      },
      '/fmea': {
        target: 'http://localhost:8080',
        'changeOrigin': true,
      },
    },
  },
};
