#!/usr/bin/env node

const http = require('http');
const { spawn } = require('child_process');

const API_URL = 'http://localhost:3000/health';
const MAX_RETRIES = 10;
const RETRY_DELAY = 1000;

function checkAPI(retries = 0) {
  return new Promise((resolve, reject) => {
    const req = http.get(API_URL, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ API is running on http://localhost:3000');
        resolve(true);
      } else {
        reject(new Error(`API returned status ${res.statusCode}`));
      }
    });

    req.on('error', (err) => {
      if (retries < MAX_RETRIES) {
        if (retries === 0) {
          console.log('⏳ API not running, starting it now...');
          startAPI();
        }
        setTimeout(() => {
          checkAPI(retries + 1)
            .then(resolve)
            .catch(reject);
        }, RETRY_DELAY);
      } else {
        console.error('❌ Failed to start API after multiple attempts');
        reject(err);
      }
    });

    req.end();
  });
}

function startAPI() {
  const apiProcess = spawn('npm', ['run', 'start:api'], {
    detached: true,
    stdio: 'ignore',
    shell: true,
  });

  apiProcess.unref();
  console.log('🚀 Starting API in background...');
}

checkAPI()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
