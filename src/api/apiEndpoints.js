function trendingCoinsData(currency) {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
}

function coinsListData(currency) {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
}

function singleCoinData(id) {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
}

function previousCoinData(id, currency, days = 365) {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
}

export { trendingCoinsData, coinsListData, singleCoinData, previousCoinData };
