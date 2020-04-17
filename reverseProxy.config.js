module.exports = {
  apps: [{
    name: "api-jason_FEC_proxy",
    script: "./server/index.js",
    watch: true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
    "NODE_ENV": "production"
    }
  }]
};