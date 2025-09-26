module.exports = {
  apps: [{
    name: 'tootie-treats',
    script: 'npm',
    args: 'run dev',
    cwd: '/root/Projects/tootie-treats',
    env: {
      NODE_ENV: 'development',
      PORT: 5173
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    watch: false,
    autorestart: true,
    max_restarts: 10,
    restart_delay: 1000
  }]
};