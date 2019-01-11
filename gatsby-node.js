const envConstant  = require('./configuration/properties');
const webpack = require('webpack');

const appEnv = process.env.npm_config_appenv || 'dev';
const defaultEnvOptions = envConstant.env[appEnv];

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              // We don't need to add the matching ExtractText plugin
              // because gatsby already includes it and makes sure its only
              // run at the appropriate stages, e.g. not in development
              loaders.miniCssExtract(),
              loaders.css({ importLoaders: 1 }),
              // the postcss loader comes with some nice defaults
              // including autoprefixer for our configured browsers
              loaders.postcss(),
              `less-loader`,
            ],
          },
        ],
      },
      plugins: [
        plugins.define({
          envOption: defaultEnvOptions,
        }),
      ],
    })
  }