module.exports = {
  apps: [{
    name: 'shrihanpay',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/shrihanpay',
    env: {
      NODE_ENV: 'production',
      PORT: 3065
    }
  }]
}