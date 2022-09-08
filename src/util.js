// api calls
const coinsList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

const singleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

const historicalCharData = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

const trendingCoinsData = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

// Large Number Formatter
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Chart Data According To The No. Of Days
const chartData = [
  {
    label: '24 Hours',
    value: 1,
  },
  {
    label: '30 Days',
    value: 30,
  },
  {
    label: '3 Months',
    value: 90,
  },
  {
    label: '1 Year',
    value: 365,
  },
];

export {
  coinsList,
  singleCoin,
  historicalCharData,
  trendingCoinsData,
  numberWithCommas,
  chartData,
};
