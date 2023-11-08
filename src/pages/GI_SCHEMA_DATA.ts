
/** G6VP 站点 本地上传的数据的 Schema 信息 **/
export const GI_SCHEMA_DATA =  {
        "nodes": [{
            "nodeType": "发现措施",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "fmeano": "string",
                "id": "string",
                "type": "string",
                "名称": "string",
                "parentId": "string",
                "s": "number",
                "o": "number",
                "d": "number",
                "ap": "string",
                "kind": "number",
                "actionType": "number",
                "dept": "string"
            }
        }, {
            "nodeType": "防范措施",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "fmeano": "string",
                "id": "string",
                "type": "string",
                "name": "string",
                "parentId": "string",
                "s": "number",
                "o": "number",
                "d": "number",
                "ap": "string",
                "kind": "number",
                "actionType": "number",
                "dept": "string"
            }
        }, {
            "nodeType": "失效",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "fmeano": "string",
                "id": "string",
                "type": "string",
                "name": "string",
                "parentId": "string",
                "no": "string",
                "kind": "number",
                "dept": "string"
            }
        }, {
            "nodeType": "功能",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "fmeano": "string",
                "id": "string",
                "type": "string",
                "name": "string",
                "parentId": "string",
                "no": "string",
                "kind": "number",
                "dept": "string"
            }
        }, {
            "nodeType": "组件",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "fmeano": "string",
                "id": "string",
                "type": "string",
                "name": "string",
                "no": "string",
                "kind": "number",
                "dept": "string"
            }
        }],
        "edges": [{
            "edgeType": "UNKNOW",
            "edgeTypeKeyFromProperties": "undefined",
            "sourceNodeType": "失效",
            "targetNodeType": "失效",
            "properties": {
                "source": "string",
                "target": "string"
            }
        }]
};

