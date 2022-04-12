const axios = require('axios')
require('dotenv').config()

let response = null;
new Promise(async (resolve,reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
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