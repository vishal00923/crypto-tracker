import React from 'react';

import Banner from '../Components/Banner/Banner';
import CoinsTable from '../Components/CoinsTable/CoinsTable';

const HomePage = ({ currency, symbol, coins, setCoins }) => {
  return (
    <>
      <Banner currency={currency} symbol={symbol} />
      <CoinsTable
        currency={currency}
        symbol={symbol}
        coins={coins}
        setCoins={setCoins}
      />
    </>
  );
};

export default HomePage;
