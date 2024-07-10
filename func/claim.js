const axios = require('axios');
const URL_API = "https://wallet-api.spell.club/claim";

// Fungsi untuk melakukan permintaan POST dengan token tertentu
const postWithAuth = async (authToken) => {
  try {
    const response = await axios.post(URL_API, {}, {
      headers: {
        'Authorization': `${authToken}`
      }
    });
    console.log(`Successfully claimed:`, response.status);
  } catch (error) {
    console.error(`Error claiming..:`, error.message);
  }
};

module.exports = postWithAuth;