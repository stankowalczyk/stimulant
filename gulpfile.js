const gulpfile = require("stimulant-gulpfile");

Object.assign(gulpfile.config, {
  development: {
    apiUrl: "http://localhost:3000"
  },
  staging: {
    apiUrl: "http://localhost:3001"
  },
  production: {
    apiUrl: "http://localhost:3002"
  }
}[gulpfile.config.env]);
