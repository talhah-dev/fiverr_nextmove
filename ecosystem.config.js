module.exports = {
  apps: [
    {
      name: 'nextjs',
      script: '.next/standalone/server.js',
      cwd: '/var/www/haconcepts',
      instances: 1,
      exec_mode: 'fork', // oder 'cluster' für Multi-Core
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0'
      },
      error_file: '/var/www/haconcepts/logs/pm2-error.log',
      out_file: '/var/www/haconcepts/logs/pm2-out.log',
      log_file: '/var/www/haconcepts/logs/pm2-combined.log',
      time: true,
      merge_logs: true,

      // Auto-Restart bei Crashes
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',

      // Graceful Shutdown
      kill_timeout: 5000,
      listen_timeout: 3000,
      shutdown_with_message: false
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'YOUR_VPS_IP',
      ref: 'origin/main',
      repo: 'https://github.com/SiarCoding/haconcepts.git',
      path: '/var/www/haconcepts',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
