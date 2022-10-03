function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const chartDetails = [
  {
    label: '1 Day',
    value: 1,
  },
  {
    label: '30 Days',
    value: 30,
  },
  {
    label: '90 Days',
    value: 90,
  },
  {
    label: '365 Days',
    value: 365,
  },
];

const currencyTable = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CHF: 'CHF',
  CNY: '¥',
  INR: '₹',
  KRW: '₩',
  RUB: '₽',
  SEK: 'kr',
  TRY: '₺',
  ZAR: 'R',
};

export { numberWithCommas, chartDetails, currencyTable };
