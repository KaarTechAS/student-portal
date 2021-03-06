const winston = require("winston");

const rotate = require("winston-logrotate").Rotate;



module.exports.intialize = () => {

  module.exports.logger = winston.createLogger({

    transports: [

      new rotate({
        file: "./web.log",

        colorize: true,

        timestamp: true,

        json: true,

        size: "2m",

        keep: 15,

        compress: true,

        level: process.env.ENV === "dev" ? "debug" : "info"

      })

    ]

  });

};