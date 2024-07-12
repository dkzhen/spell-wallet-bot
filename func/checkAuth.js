const axios = require('axios');
const URL_API = "https://wallet-api.spell.club/claim";


const checkTokenValidity = async (token) => {
    try {
      const response = await axios.post(URL_API, {}, {
        headers: {
          'Authorization': `${token}`
        }
      });
      console.log(`Successfully claimed:`, response.status);
      return true;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Token expired");
        return false;
      }
      console.error(`Error claiming with token :`,error.response.status);
      return true;
    }
  };

  module.exports = checkTokenValidity