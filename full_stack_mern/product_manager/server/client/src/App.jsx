import React from 'react'
import './App.css'
import DisplayProduct from './views/DisplayProduct';
import DetailProduct from './views/DetailProduct';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products/:id" element={<DetailProduct />}/>
        <Route path="/products/" element={<DisplayProduct />} />
      </Routes>
    </div>
  );
}

export default App
