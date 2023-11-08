import React from "react";
import {GI_ASSETS_PACKAGE, GI_PROJECT_CONFIG, SERVER_ENGINE_CONTEXT} from "./GI_EXPORT_FILES";
import {GI_SCHEMA_DATA} from "./GI_SCHEMA_DATA";
import './index.less'
import {Button, Card, Form, Input, Select, Tooltip} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import ThemeSwitch from "../components/Theme";
import {getList, getMoreRelationNode} from '@/api/index';
import {useRequest} from 'ahooks';
import {useLocation} from 'umi';
import {GI_SERVICES_OPTIONS} from "./GI_AS_DATA";
import {getCombinedAssets, getServicesByConfig} from "../util/utils";

const InputGroup = Input.Group;
const {Option} = Select;

window['GI_PUBLIC_PATH'] = '/public/';

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = (props) => {
    const [state, setState] = React.useState({
        isReady: false,
        assets: null,
        config: {},
        services: [],
        currId: '',
        currName: '',
        selectType: 'DFMEA',
        keywords: ''
    });

    const [form] = Form.useForm();
    const {runAsync: fetchList} = useRequest(getList, {manual: true});
    const {runAsync: fetchMoreRelationNode} = useRequest(getMoreRelationNode, {manual: true});
    const {search} = useLocation()

    let searchParams = new URLSearchParams(search)

    const getAssets = getCombinedAssets();
    const getServices = getServicesByConfig(GI_SERVICES_OPTIONS, null);


    const MyServices = getServices.map((c) => {

        if (c.id === "GI/GI_SERVICE_SCHEMA") {
            return {
                ...c,
                service: (localData, schemaData) => {
                    return new Promise((resolve) => {
                        resolve(
                            GI_SCHEMA_DATA
                        )
                    })
                },
            };
        }

        if (c.id === "GI/PropertiesPanel") {
            return {
                ...c,
                service: (params) => {
                    const data = params.data;
                    console.log("data", data);
                    if (data.type == "FMEA") {
                        setState(preState => {
                            return {
                                ...preState,
                                currId: data.名称,
                                currName: data.名称
                            }
                        });
                    } else {
                        setState(preState => {
                            return {
                                ...preState,
                                currId: '',
                                currName: ''
                            }
                        });
                    }

                    return new Promise(function (resolve) {
                        let newVar = {
                            名称: data.名称,
                            类型: data.type,
                            融合: data.Aggregations || '',
                        };
                        if (data.fmeanos) {
                            let replaceAll = data.fmeanos.split(',');
                            console.log(replaceAll)
                            if (replaceAll) {
                                for (let i = 0; i < replaceAll.length; i++) {
                                    newVar['编号' + (i + 1)] = replaceAll[i];
                                }
                            }
                        }
                        return resolve(newVar);
                    });
                },
            };
        }


        if (c.id === "GI/GI_SERVICE_INTIAL_GRAPH") {
            return {
                ...c,
                service: (params, localData) => {
                    let date = searchData(null);
                    return date
                },
            };
        }

        if (c.id === "GI/NeighborsQuery") {
            return {
                ...c,
                service: (ReqNeighborsQuery) => {
                    return fetchMoreRelationNode({
                            params: {
                                domain: '',
                                nodeId: ReqNeighborsQuery.ids[0],
                                pageSize: (ReqNeighborsQuery.code || 1) * 50
                            }
                        }
                    ).then()
                        .then(res => {
                            return transform(res.data);
                        })
                },
            };
        }
        return c;
    });

    const getNewlineLength = (val) => {
        let str = String(val);
        let pattern = /(\n)/g
        return str.match(pattern) && (str.match(pattern).length + 1) || 1;
    }
    const getNewline = (val, maxWidth, fontSize, row) => {
        if (!val) {
            return
        }
        let str = String(val);
        let bytesCount = 0;
        let s = "";
        let count = 0;
        const pattern = new RegExp('[\u4E00-\u9FA5]+'); // distinguish the Chinese charactors and letters
        for (let i = 0, n = str.length; i < n; i++) {
            let c = str.charAt(i);
            s += str.charAt(i);
            if (pattern.test(c)) {
                // Chinese charactors
                bytesCount += fontSize;
            } else {
                // get the width of single letter according to the fontSize
                bytesCount += window.G6.Util.getLetterWidth(c, fontSize);
            }
            if (bytesCount >= maxWidth) {
                s = s + '\n';
                bytesCount = 0;
                count++;
                if (count >= row) {
                    return s.slice(0, -3) + '...';
                }
            }
        }
        return s;
    }
    const goFMEA = async () => {
        const {currId} = state;
        window.open('http://localhost:3202/browseInfo/' + currId + '/2005000000IDRECOB27U/to/2009000000IDRECO0B3W');
    };
    const searchData = (data) => {

        let date = fetchList({
            data: {
                domain: searchParams.get('p2'),
                // "nodeName": "",
                parameters: [
                    {key: "Name", value: searchParams.get('p1'), comparison: ''},
                    // {key: "FmeaType", value: searchParams.get('type'), comparison: ''},
                ],
                pageSize: 50
            },
        }).then()
            .then(res => {
                let transform1 = transform(res.data);
                console.log(transform1)
                //@ts-ignore
                const {useContext} = window.GISDK;

                // const { graph, data } = useContext();
                // console.log("graph instance", graph);


                // useContext((draft: any) => {
                //     draft.schemaData.edges = [...draft.schemaData.edges, ...transform1.edges]
                //     draft.schemaData.nodes = [...draft.schemaData.nodes, ...transform1.nodes]
                // })
                return transform1;
            });
        return date;
    }

    const handleFormSubmit = async (value) => {
        console.log(value)
        // searchData(null);

    }

    const transform = (data) => {
        let nodes = []
        let edges = []
        if (data.node) {
            nodes = data.node.map(c => {
                let fname = c.title || c.Name;
                c.名称 = fname;
                c.name = getNewline(fname, 100, 14, 3);
                c.type = c.labelsName
                return {
                    id: c.uuid,
                    data: c,
                };
            });
        }

        if (data.relationship) {
            edges = data.relationship.map(c => {
                return {
                    source: c.sourceId,
                    target: c.targetId,
                    data: c,
                    edgeType: c.type
                }
            });
        }
        return {nodes, edges}
    }


    React.useEffect(() => {

        setState(preState => {
            return {
                ...preState,
                isReady: true,
                assets: getAssets,
                services: MyServices,
                config: GI_PROJECT_CONFIG,
            }
        })
        // })
    }, []);
    const {assets, isReady, config, services, currId, currName, selectType, keywords} = state;

    if (!isReady) {
        return <div>loading...</div>
    }
    return (
        <div className="gi-root">
            {/*<div className="ant-pro-card">*/}
            {/*    <Card hoverable style={{height: "10vh"}}>*/}
            {/*        <Form form={form} name="horizontal_login" layout="inline" onFinish={handleFormSubmit}>*/}
            {/*            <Form.Item*/}
            {/*                style={{width: "480px"}}*/}
            {/*                name={'p1'}*/}
            {/*            >*/}
            {/*                <InputGroup compact>*/}
            {/*                    <Select style={{width: '20%'}} defaultValue={selectType}*/}
            {/*                            onChange={() => {*/}
            {/*                            }}>*/}
            {/*                        <Option value="DFMEA">DFMEA</Option>*/}
            {/*                        <Option value="PFMEA">PFMEA</Option>*/}
            {/*                    </Select>*/}
            {/*                    <Input placeholder="搜索" style={{width: '80%'}}/>*/}
            {/*                </InputGroup>*/}

            {/*            </Form.Item>*/}

            {/*            <Form.Item*/}
            {/*                name={`field-`}*/}
            {/*                label={`Field `}*/}
            {/*            >*/}
            {/*                <Input placeholder="placeholder"/>*/}
            {/*            </Form.Item>*/}


            {/*            <Form.Item*/}
            {/*                name="ps"*/}
            {/*            >*/}
            {/*                <Button type="primary" htmlType="submit">*/}
            {/*                    Search*/}
            {/*                </Button>*/}
            {/*            </Form.Item>*/}

            {/*            <Form.Item*/}
            {/*                name="p3">*/}
            {/*                {*/}
            {/*                    currId ? (*/}
            {/*                        <Tooltip title="search">*/}
            {/*                            <Button type="primary" htmlType="submit" icon={<SearchOutlined/>}*/}
            {/*                                    onClick={() => {*/}
            {/*                                        goFMEA();*/}
            {/*                                    }}>{currId}</Button>*/}
            {/*                        </Tooltip>) : null}*/}
            {/*            </Form.Item>*/}
            {/*        </Form>*/}
            {/*    </Card>*/}
            {/*</div>*/}
            <div style={{position: 'absolute', right: '200px', top: '40px', zIndex: 100, display: "flex"}}>
                <ThemeSwitch></ThemeSwitch>
                <Form.Item
                    name="fmea">
                    {
                        currName ? (
                            <Tooltip title="search">
                                <Button type="primary" htmlType="submit" icon={<SearchOutlined/>}
                                        onClick={() => {
                                            goFMEA();
                                        }}>{currName}</Button>
                            </Tooltip>) : null}
                </Form.Item>
            </div>
            <div style={{height: "100vh"}}>
                {/** @ts-ignore */}
                <window.GISDK.default
                    config={config}
                    assets={assets}
                    services={services}
                />
            </div>
        </div>
    );
};

export default App;




