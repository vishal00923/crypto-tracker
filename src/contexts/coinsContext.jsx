import { createContext, useState } from 'react';

export const CoinsContext = createContext({
  coins: [],
  setCoins: () => {},
});

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  const value = { coins, setCoins };

  return (
    <CoinsContext.Provider value={value}>{children}</CoinsContext.Provider>
  );
};
