/** 计算逻辑 **/
export const packages = [
    {
        global: "GI_ASSETS_BASIC",
        name: "@alipay/gi-assets-basic",
    },
    {
        global: "GI_ASSETS_ADVANCE",
        name: "@alipay/gi-assets-advance",
    },
    {
        global: "GI_ASSETS_SCENE",
        name: "@alipay/gi-assets-scene",
    },
];
export const getAssets = () => {
    return packages
        .map((item) => {
            let assets = window[item.global];
            if (!assets) {
                return null;
            }
            if (assets.hasOwnProperty("default")) {
                assets = assets.default;
            }
            return {
                ...item,
                assets,
            };
        })
        .filter((c) => {
            return c;
        });
};

export const getCombinedAssets = () => {
    const assets = getAssets();
    return assets.reduce(
        (acc, curr) => {
            return {
                components: {
                    ...acc.components,
                    ...curr.assets.components,
                },
                elements: {
                    ...acc.elements,
                    ...curr.assets.elements,
                },
                layouts: {
                    ...acc.layouts,
                    ...curr.assets.layouts,
                },
            };
        },
        {
            components: {},
            elements: {},
            layouts: {},
        }
    );
};

export function looseJsonParse(obj) {
    return Function('"use strict";return (' + obj + ")")();
}
export const defaultTransFn = (data, params) => {
    return data;
};
export const getServicesByConfig = (serviceConfig, LOCAL_DATA) => {
    return serviceConfig.map((s) => {
        const { id, content, mode } = s;
        const runtimeContent = content?.split("export default")[1] || content;
        const transFn = looseJsonParse(runtimeContent);
        return {
            id,
            service: (...params) => {
                return transFn(...params, LOCAL_DATA);
            },
        };
    });
};
