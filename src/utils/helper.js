function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const chartDetails = [
  {
    label: '24 Hours',
    value: 1,
  },
  {
    label: '1 Month',
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

const currencyTable = {
  USD: '$',
  INR: '₹',
  EUR: '€',
  GBP: '£',
};

export { numberWithCommas, chartDetails, currencyTable };
