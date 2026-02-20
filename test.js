const https = require('https');

https.get('https://api.telegram.org', (res) => {
  console.log('STATUS:', res.statusCode);
}).on('error', (e) => {
  console.error('ERROR:', e.message);
});