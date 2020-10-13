module.exports = {
  apps: [
    {
      script: "App.js",
      name: "seg-server",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
