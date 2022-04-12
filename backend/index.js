const axios = require('axios')
require('dotenv').config()

let response = null;

function execEndpoint(endpoint) {
  return new Promise(async (resolve,reject) => {
    try {
    response = await axios.get(process.env.API_ENDPOINT+endpoint, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
      },
    });
    } catch (err) {
      response = null;
      console.log(err)
      reject(err);
    }
    if(response) {
      const json = response.data;
      console.log(json);
      resolve(json);
    }
  });
}

async function keyInfo() {
  return await execEndpoint(process.env.KEY_ENDPOINT)
}

async function cryptoCurrency() {
  return await execEndpoint(process.env.CRYPTO_ENDPOINT)
}


module.exports = {
  cryptoCurrency,
  keyInfo
}