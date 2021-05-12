const fs = require("fs");

module.exports = {
    devServer:{
        proxy: 'https://78r2cneiod.execute-api.us-east-2.amazonaws.com',
        https: {
            key: fs.readFileSync("./certs/localhost-key.pem"),
            cert: fs.readFileSync("./certs/localhost.pem")
        }
    }
};