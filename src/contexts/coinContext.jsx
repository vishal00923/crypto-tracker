import { createContext, useState } from 'react';

export const CoinContext = createContext({
  coin: {},
  setCoin: () => {},
});

export const CoinProvider = ({ children }) => {
  const [coin, setCoin] = useState({});

  const value = { coin, setCoin };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};
