import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GloboStyles from './styles/GloboStyles'
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={< Profile />} />
        <Route path="/:username" element={< Profile />} />
        <Route path="/:username/:reponame" element={< Repo />} />
      </Routes>

      <Footer />
    <GloboStyles />
    </BrowserRouter>
  );
}

export default App;
