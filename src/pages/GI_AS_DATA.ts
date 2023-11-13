export const GI_SERVICES_OPTIONS = [
    {
        id: "GI/GI_SERVICE_INTIAL_GRAPH",
        content:
            "export default (localData)=>{\n      return new Promise((resolve)=>{\n        resolve(localData)\n      })\n    }",
        mode: "MOCK",
        name: "初始化接口",
    },
    {
        id: "GI/NeighborsQueryMenu",
        content:
            'export default (e,t)=>{const{id:n}=e;console.log("邻居查询",e);const r=[{label: "关联查询", code: 1}];return new Promise((e=>e(r)))}',
        mode: "MOCK",
        name: "GI/NeighborsQueryMenu",
    },
    {
        id: "GI/GI_SERVICE_SCHEMA",
        content:
            "export default (e,t)=>{const{data:n}=e;return new Promise((e=>e(n)))}",
        mode: "MOCK",
        name: "初始化接口",
    },
    {
        id: "GI/PropertiesPanel",
        mode: "MOCK",
        name: "PropertiesPanel",
        content:
            "export default (e,t)=>{const{data:n}=e;return new Promise((e=>e(n)))}",
    },

    {
        id: "GI/NeighborsQuery",
        mode: "MOCK",
        name: "Mock/NeighborsQuery",
        content:
            'export default (e,t)=>{const{id:n}=e;console.log("邻居查询",e);const r={nodes:[{id:n},{id:`${n}-1`},{id:`${n}-2`},{id:`${n}-3`},{id:`${n}-4`}],edges:[{source:n,target:`${n}-1`},{source:n,target:`${n}-2`},{source:n,target:`${n}-3`}]};return new Promise((e=>e(r)))}',
    },
];
