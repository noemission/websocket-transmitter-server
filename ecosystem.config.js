module.exports = {
    apps : [{
      name: 'websocket-transmitter-server',
      script: 'index.js',
      env: {
        NODE_ENV: 'production',
        PORT: '3003',
      },
    }]
  };