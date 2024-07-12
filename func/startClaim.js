const fs = require('fs');
const checkTokenValidity = require('./checkAuth');

const authTokens = JSON.parse(fs.readFileSync('configs/config.json', 'utf-8'));


// Fungsi untuk memulai proses pengulangan
const validTokens = []
const startProcessClaim = async () => {
  for (let i = 0; i < authTokens.length; i++) {
    const token = authTokens[i].auth;
    const isValid = await checkTokenValidity(token);
    if (isValid) {
      validTokens.push(authTokens[i]);
    }
    fs.writeFileSync('configs/config.json', JSON.stringify(validTokens, null, 2), 'utf-8');
  }
  

  console.log('All tokens have been used. Waiting 6 hours to restart...');
  setTimeout(startProcessClaim, 6 * 60 * 60 * 1000); // Mulai ulang setelah 6 jam
};

module.exports = startProcessClaim