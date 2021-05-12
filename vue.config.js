const fs = require("fs");

module.exports = {
    chainWebpack: config => {
      config.module
        .rule('images')
          .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    },
    devServer:{
        proxy: 'https://78r2cneiod.execute-api.us-east-2.amazonaws.com',
        https: {
            key: fs.readFileSync("./certs/localhost-key.pem"),
            cert: fs.readFileSync("./certs/localhost.pem")
        }
    }
  };
