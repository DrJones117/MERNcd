import React from 'react'
import './App.css'
import DisplayProduct from './views/DisplayProduct';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayProduct />} />
      </Routes>
    </div>
  );
}

export default App
