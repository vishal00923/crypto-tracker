import { createContext, useState } from 'react';

export const CurrencyContext = createContext({
  currency: 'INR',
  setCurrency: () => {},
  currencySymbol: '₹',
  setCurrencySymbol: () => {},
});

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR');
  const [currencySymbol, setCurrencySymbol] = useState('₹');

  const value = { currency, setCurrency, currencySymbol, setCurrencySymbol };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
