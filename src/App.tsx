import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MintNewNft from './Pages/MintNewNft';
import ViewAllNfts from './Pages/ViewAllNfts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mint" element={<MintNewNft />} />
      <Route path="/my-nfts" element={<ViewAllNfts />} />
    </Routes>
  );
}

export default App;
