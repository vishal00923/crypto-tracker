import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Coin from './routes/Coin';
import Header from './components/Header/Header';
import Notifications from './components/Notifications/Notifications';

import { theme } from './App.styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coin />} />
      </Routes>
      <Notifications />
    </ThemeProvider>
  );
}
