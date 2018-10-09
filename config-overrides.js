const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        config,
    );
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@link-color": "#787878",
                      "@link-hover-color": "#f3f3f3",
                      "@form-item-margin-bottom": "1rem",
                      "@btn-primary-bg": "#cc4b37",
                      "@btn-height-base": "36px",
                      "@input-hover-border-color": "#5fda20",
                      "@form-vertical-label-padding": "0",
                      "@switch-color": "#cc4b37"},
        javascriptEnabled: true,
    })(config, env);
    return config;
};