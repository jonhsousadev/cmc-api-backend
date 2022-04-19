const axios = require('axios')

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

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

async function pingCoinGecko() {
  let data = await CoinGeckoClient.ping();
  return data;
};

async function allCoinsCoinGecko() {
  let data = await CoinGeckoClient.coins.all();
  return data;
};

async function coinsMarketsCoinGecko() {
  let data = await CoinGeckoClient.coins.markets();
  return data;
};

module.exports = {
  cryptoCurrency,
  keyInfo,
  pingCoinGecko,
  allCoinsCoinGecko,
  coinsMarketsCoinGecko
}