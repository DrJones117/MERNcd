import React from 'react'
import './App.css'
import DisplayProduct from './views/DisplayProduct';
import DetailProduct from './views/DetailProduct';
import { Routes, Route, useNavigate } from "react-router-dom";
import UpdateProduct from './views/Update';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/products/:id/edit" element={<UpdateProduct/>}/>
        <Route path="/products/:id" element={<DetailProduct navigate={navigate}/>}/>
        <Route path="/products/" element={<DisplayProduct />} />
      </Routes>
    </div>
  );
}

export default App
