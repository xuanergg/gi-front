
/** 动态请求需要的配套资产 **/
export const GI_ASSETS_PACKAGE = [{
    "name": "@antv/gi-assets-advance",
    "version": "2.5.8",
    "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-advance/2.5.8/dist/index.min.js",
    "global": "GI_ASSETS_ADVANCE"
}, {
    "name": "@antv/gi-assets-basic",
    "version": "2.4.9",
    "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-basic/2.4.9/dist/index.min.js",
    "global": "GI_ASSETS_BASIC"
}, {
    "name": "@antv/gi-assets-scene",
    "version": "2.2.7",
    "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-scene/2.2.7/dist/index.min.js",
    "global": "GI_ASSETS_SCENE"
}];

/** G6VP 站点自动生成的配置 **/
export const GI_PROJECT_CONFIG = {
    "nodes": [{
        "id": "SimpleNode",
        "props": {
            "size": 200,
            "color": "#ddd",
            "label": ["发现措施^^name"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 20,
                    "position": "center"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "默认样式",
        "expressions": [],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 200,
            "color": "rgb(197,222,253)",
            "label": ["发现措施^^name"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 20,
                    "position": "center"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "发现措施 TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "发现措施"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 200,
            "color": "rgb(48,138,243)",
            "label": ["防范措施^^name"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 20,
                    "position": "center"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "防范措施 TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "防范措施"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 200,
            "color": "#af1e1e",
            "label": ["失效^^name"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 20,
                    "position": "center"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "失效 TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "失效"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 200,
            "color": "#7dff00",
            "label": ["功能^^name"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 20,
                    "position": "center"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "功能 TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "功能"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 200,
            "color": "#ba8540",
            "label": ["组件^^name"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 20,
                    "position": "center"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "组件 TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "组件"
        }],
        "logic": true
    }],
    "edges": [{
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "rgba(74,74,74,1)",
            "label": [],
            "advanced": {
                "keyshape": {
                    "hasArrow": true,
                    "customPoly": false,
                    "lineDash": [],
                    "opacity": 1
                },
                "label": {
                    "visible": true,
                    "fontSize": 12,
                    "offset": [0, 0],
                    "fill": "#ddd",
                    "backgroundEnable": true,
                    "backgroundFill": "#fff",
                    "backgroundStroke": "#fff"
                },
                "animate": {
                    "visible": false
                }
            }
        },
        "groupName": "默认样式",
        "expressions": [],
        "logic": true
    }],
    "components": [{
        "id": "ActivateRelations",
        "type": "AUTO",
        "name": "元素高亮",
        "props": {
            "enableNodeHover": true,
            "enableEdgeHover": true,
            "enable": true,
            "trigger": "click",
            "upstreamDegree": 1,
            "downstreamDegree": 1,
            "multiSelectEnabled": false,
            "modifierKey": "alt"
        }
    }, {
        "id": "CanvasSetting",
        "type": "AUTO",
        "name": "画布设置",
        "props": {
            "styleCanvas": {
                "backgroundColor": "#fff",
                "backgroundImage": "",
                "background": "#fff"
            },
            "dragCanvas": {
                "disabled": false,
                "direction": "both",
                "enableOptimize": true
            },
            "zoomCanvas": {
                "disabled": false,
                "enableOptimize": true
            },
            "clearStatus": true,
            "doubleClick": true
        }
    }, {
        "id": "ContextMenu",
        "type": "GICC_MENU",
        "name": "右键菜单",
        "props": {
            "GI_CONTAINER": ["NeighborsQuery", "ToggleClusterWithMenu", "PinNodeWithMenu"]
        }
    }, {
        "id": "DownLoad",
        "type": "GIAC",
        "name": "下载",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "下载",
                "isShowIcon": true,
                "icon": "icon-download",
                "iconFontSize": "18px",
                "buttonType": "text",
                "isShowTooltip": true,
                "tooltip": "点击下载画布图片",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "46px",
                "isVertical": true
            }
        }
    }, {
        "id": "Export",
        "type": "GIAC",
        "name": "导出",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "导出",
                "isShowIcon": true,
                "icon": "icon-export",
                "iconFontSize": "18px",
                "buttonType": "text",
                "isShowTooltip": true,
                "tooltip": "导出CSV,PNG,JSON数据",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "46px",
                "isVertical": true
            }
        }
    }, {
        "id": "FilterPanel",
        "type": "GIAC_CONTENT",
        "name": "筛选面板",
        "props": {
            "filterKeys": [],
            "enableInfoDetect": true,
            "isFilterIsolatedNodes": true,
            "highlightMode": true,
            "filterLogic": "and",
            "histogramOptions": {
                "isCustom": false,
                "min": null,
                "max": null,
                "binWidth": null
            },
            "GI_CONTAINER_INDEX": 2,
            "GIAC_CONTENT": {
                "visible": false,
                "disabled": false,
                "isShowTitle": true,
                "title": "筛选面板",
                "isShowIcon": true,
                "icon": "icon-filter",
                "isShowTooltip": true,
                "tooltip": "通过属性筛选画布信息，可自定义",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true,
                "containerType": "div",
                "containerAnimate": false,
                "containerDraggable": false,
                "dragHandle": "header",
                "containerPlacement": "RT",
                "offset": [0, 0],
                "containerWidth": "400px",
                "containerHeight": "calc(100% - 100px)",
                "contaienrMask": false
            }
        }
    }, {
        "id": "FitCenterView",
        "type": "GIAC",
        "name": "自适应居中",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "自适应居中",
                "isShowIcon": true,
                "icon": "icon-fit-center",
                "iconFontSize": "18px",
                "buttonType": "text",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "46px",
                "isVertical": true
            }
        }
    }, {
        "id": "GrailLayout",
        "type": "GICC_LAYOUT",
        "name": "圣杯布局",
        "props": {
            "containers": [{
                "id": "GI_CONTAINER_LEFT",
                "name": "左侧容器",
                "GI_CONTAINER": [],
                "visible": true,
                "width": "400px"
            }, {
                "id": "GI_CONTAINER_RIGHT",
                "name": "右侧容器",
                "GI_CONTAINER": [],
                "visible": true,
                "width": "400px"
            }, {
                "id": "GI_CONTAINER_BOTTOM",
                "name": "底部容器",
                "GI_CONTAINER": [],
                "visible": true,
                "height": "400px"
            }, {
                "id": "GI_CONTAINER_TOP",
                "name": "顶部容器",
                "GI_CONTAINER": [],
                "visible": false,
                "height": "200px"
            }]
        }
    }, {
        "id": "Initializer",
        "type": "INITIALIZER",
        "name": "初始化器",
        "props": {
            "serviceId": "GI/GI_SERVICE_INTIAL_GRAPH",
            "schemaServiceId": "GI/GI_SERVICE_SCHEMA",
            "GI_INITIALIZER": true,
            "aggregate": false,
            "transByFieldMapping": false
        }
    }, {
        "id": "LargeGraph",
        "type": "GIAC",
        "name": "3D大图",
        "props": {
            "visible": false,
            "backgroundColor": "#fff",
            "highlightColor": "red",
            "minSize": "20%",
            "maxSize": "100%",
            "placement": "RB",
            "offset": [0, 0],
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "3D大图",
                "isShowIcon": true,
                "icon": "icon-3d",
                "iconFontSize": "18px",
                "buttonType": "text",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "46px",
                "isVertical": true
            }
        }
    }, {
        "id": "Loading",
        "type": "AUTO",
        "name": "加载动画",
        "props": {}
    }, {
        "id": "NeighborsQuery",
        "type": "GIAC_MENU",
        "name": "邻居查询",
        "props": {
            "serviceId": "GI/NeighborsQuery",
            "menuServiceId": "GI/NeighborsQueryMenu",
            "degree": 3,
            "isFocus": true,
            "limit": 100
        }
    }, {
        "id": "NodeLegend",
        "type": "AUTO",
        "name": "节点图例",
        "props": {
            "sortKey": "type",
            "textColor": "#ddd",
            "placement": "LB",
            "offset": [100, 20]
        }
    }, {
        "id": "Overview",
        "type": "GIAC_CONTENT",
        "name": "大图概览",
        "props": {
            "limit": 6000,
            "filterLogic": "and",
            "GI_CONTAINER_INDEX": 2,
            "GIAC_CONTENT": {
                "visible": false,
                "disabled": false,
                "isShowTitle": true,
                "title": "大图概览",
                "isShowIcon": true,
                "icon": "icon-dashboard",
                "isShowTooltip": false,
                "tooltip": "123",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true,
                "containerType": "div",
                "containerAnimate": false,
                "containerDraggable": false,
                "dragHandle": "header",
                "containerPlacement": "RT",
                "offset": [0, 0],
                "containerWidth": "400px",
                "containerHeight": "calc(100% - 100px)",
                "contaienrMask": false
            }
        }
    }, {
        "id": "PinNodeWithMenu",
        "type": "GIAC_MENU",
        "name": "固定节点(MENU)",
        "props": {}
    }, {
        "id": "Placeholder",
        "type": "AUTO",
        "name": "画布占位符",
        "props": {
            "img": "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1BGfQ78mW4kAAAAAAAAAAAAADmJ7AQ/original",
            "text": "开始你的图分析应用～",
            "textColor": "#999",
            "spacing": 8,
            "width": 200
        }
    }, {
        "id": "PropertiesPanel",
        "type": "AUTO",
        "name": "属性面板",
        "props": {
            "serviceId": "GI/PropertiesPanel",
            "enableInfoDetect": true,
            "defaultiStatistic": false,
            "title": "详情",
            "placement": "RT",
            "width": "200px",
            "height": "calc(100% - 80px)",
            "offset": [10, 10],
            "animate": false
        }
    }, {
        "id": "PropertyGraphInitializer",
        "type": "AUTO",
        "name": "属性图计算",
        "props": {}
    }, {
        "id": "ToggleClusterWithMenu",
        "type": "GIAC_MENU",
        "name": "展开/收起",
        "props": {
            "isReLayout": false,
            "degree": 1
        }
    }, {
        "id": "Toolbar",
        "type": "GICC",
        "name": "工具栏",
        "props": {
            "GI_CONTAINER": ["ZoomOut", "ZoomIn", "FitCenterView", "DownLoad", "Export", "LargeGraph"],
            "direction": "vertical",
            "placement": "LT",
            "offset": [20, 40]
        }
    }, {
        "id": "Tooltip",
        "type": "AUTO",
        "name": "节点提示框",
        "props": {
            "mappingKeys": ["名称", "dept"],
            "placement": "top",
            "width": "200px",
            "hasArrow": true
        }
    }, {
        "id": "ZoomIn",
        "type": "GIAC",
        "name": "放大",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "放大",
                "isShowIcon": true,
                "icon": "icon-zoomin",
                "iconFontSize": "18px",
                "buttonType": "text",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "46px",
                "isVertical": true
            }
        }
    }, {
        "id": "ZoomOut",
        "type": "GIAC",
        "name": "缩小",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "缩小",
                "isShowIcon": true,
                "icon": "icon-zoomout",
                "iconFontSize": "18px",
                "buttonType": "text",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "46px",
                "isVertical": true
            }
        }
    }],
    "layout": {
        "id": "Force2",
        "props": {
            "type": "force2",
            "animate": true,
            "preset": {
                "type": "concentric",
                "width": 1000,
                "height": 1000,
                "minNodeSpacing": 10,
                "nodeSize": 10
            },
            "clusterNodeStrength": 35,
            "minMovement": 10,
            "damping": 0.8,
            "maxSpeed": 1000,
            "distanceThresholdMode": "max",
            "edgeStrength": 100,
            "nodeStrength": 40000,
            "defSpringLenCfg": {
                "minLimitDegree": 5,
                "maxLimitLength": 500,
                "defaultSpring": 100
            },
            "centripetalOptions": {
                "leaf": 2,
                "single": 2,
                "others": 1
            },
            "advanceWeight": false,
            "edgeWeightFieldScale": 1,
            "nodeWeightFromType": "node",
            "nodeWeightFieldScale": 1,
            "directed": false,
            "directedFromType": "node",
            "directedInWeightField": "s",
            "directedOutWeightField": "s",
            "directedIsLog": true,
            "directedMultiple": "0.1"
        }
    },
    "pageLayout": {
        "id": "GrailLayout",
        "name": "圣杯布局",
        "type": "GICC_LAYOUT",
        "props": {
            "containers": [{
                "id": "GI_CONTAINER_LEFT",
                "name": "左侧容器",
                "GI_CONTAINER": [{
                    "value": "Overview",
                    "label": "大图概览"
                }, {
                    "value": "FilterPanel",
                    "label": "筛选面板"
                }],
                "visible": true,
                "width": "280px",
                "display": true
            }, {
                "id": "GI_CONTAINER_RIGHT",
                "name": "右侧容器",
                "GI_CONTAINER": [],
                "visible": true,
                "width": "400px",
                "display": false
            }, {
                "id": "GI_CONTAINER_BOTTOM",
                "name": "底部容器",
                "GI_CONTAINER": [],
                "visible": true,
                "height": "400px",
                "display": false
            }, {
                "id": "GI_CONTAINER_TOP",
                "name": "顶部容器",
                "GI_CONTAINER": [],
                "visible": false,
                "height": "200px",
                "display": false
            }, {
                "id": "GI_FreeContainer",
                "name": "自运行组件",
                "required": true,
                "info": {
                    "id": "GI_FreeContainer",
                    "name": "自运行组件",
                    "icon": "icon-layout",
                    "type": "GICC"
                },
                "meta": {
                    "GI_CONTAINER": {
                        "x-component-props": {
                            "mode": "multiple"
                        }
                    },
                    "id": "GI_FreeContainer",
                    "name": "自运行组件",
                    "required": true
                },
                "props": {
                    "id": "GI_FreeContainer",
                    "GI_CONTAINER": [{
                        "value": "CanvasSetting",
                        "label": "画布设置"
                    }, {
                        "value": "Initializer",
                        "label": "初始化器"
                    }, {
                        "value": "ActivateRelations",
                        "label": "元素高亮"
                    }, {
                        "value": "Loading",
                        "label": "加载动画"
                    }, {
                        "value": "NodeLegend",
                        "label": "节点图例"
                    }, {
                        "value": "Placeholder",
                        "label": "画布占位符"
                    }, {
                        "value": "PropertiesPanel",
                        "label": "属性面板"
                    }, {
                        "value": "PropertyGraphInitializer",
                        "label": "属性图计算"
                    }, {
                        "value": "Tooltip",
                        "label": "节点提示框"
                    }]
                },
                "candidateAssets": [{
                    "label": "元素高亮",
                    "value": "ActivateRelations"
                }, {
                    "label": "画布设置",
                    "value": "CanvasSetting"
                }, {
                    "label": "版权",
                    "value": "Copyright"
                }, {
                    "label": "初始化器",
                    "value": "Initializer"
                }, {
                    "label": "加载动画",
                    "value": "Loading"
                }, {
                    "label": "小地图",
                    "value": "MiniMap"
                }, {
                    "label": "节点图例",
                    "value": "NodeLegend"
                }, {
                    "label": "画布占位符",
                    "value": "Placeholder"
                }, {
                    "label": "属性面板",
                    "value": "PropertiesPanel"
                }, {
                    "label": "属性图计算",
                    "value": "PropertyGraphInitializer"
                }, {
                    "label": "节点提示框",
                    "value": "Tooltip"
                }, {
                    "label": "水印",
                    "value": "Watermark"
                }, {
                    "label": "缩放状态",
                    "value": "ZoomStatus"
                }, {
                    "label": "分析历史沉淀",
                    "value": "AnalysisHistory"
                }, {
                    "label": "AI 助理",
                    "value": "Assistant"
                }, {
                    "label": "多画布页签",
                    "value": "Sheetbar"
                }],
                "GI_CONTAINER": ["CanvasSetting", "Initializer", "ActivateRelations", "Loading", "NodeLegend",
                    "Placeholder", "PropertiesPanel", "PropertyGraphInitializer", "Tooltip"
                ],
                "display": true
            }]
        }
    }
};

/** G6VP 站点选择服务引擎的上下文配置信息 **/
export const SERVER_ENGINE_CONTEXT = {
    "GI_SITE_PROJECT_ID": "3d9690da-aa97-47fc-9be9-0bd247d9013c",
    "engineId": "GI"
};

