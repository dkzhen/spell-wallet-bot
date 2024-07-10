const fs = require('fs');
const postWithAuth = require('./claim');

const authTokens = JSON.parse(fs.readFileSync('configs/config.json', 'utf-8'));


// Fungsi untuk memulai proses pengulangan
const startProcessClaim = async () => {
  for (let i = 0; i < authTokens.length; i++) {
    await postWithAuth(authTokens[i].auth);
  }

  console.log('All tokens have been used. Waiting 6 hours to restart...');
  setTimeout(startProcessClaim, 6 * 60 * 60 * 1000); // Mulai ulang setelah 6 jam
};

module.exports = startProcessClaim