module.exports = {
  apps: [
    {
      name: process.env.ENVIRONMENT,
      exec_mode: `cluster`,
      instances: `max`,
      script: `./node_modules/nuxt/bin/nuxt.js`,
      args: `start`,
    },
  ],
};
