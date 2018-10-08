const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        config,
    );
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@link-color": "#787878",
                      "@link-hover-color": "#f3f3f3"},
        javascriptEnabled: true,
    })(config, env);
    return config;
};