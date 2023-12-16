import React from 'react';
import Layout from './components/Layout/Layout';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import { ModalProvider } from './contexts/ModalContexts'; 
import MainBanner from './components/MainBanner/MainBanner';

function App() {
  return (
    <ModalProvider>
      <Layout>
        < MainBanner />
      </Layout>
    </ModalProvider>
  );
}

export default App;
