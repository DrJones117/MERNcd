import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useParams } from "react-router"; 
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Welcome = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const OtherRoute = (props) => {
  const { par, color, bgColor  } = useParams();

  return (
    <h1 style={{color, backgroundColor: bgColor, width: "1300px"}}>The {isNaN(par) ? "Word" : "Number"} is { par }</h1>
  )
}

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Welcome />}/>
      <Route path="/:par" element={<OtherRoute />}/>
      <Route path="/:par/:color/:bgColor" element={<OtherRoute />}/>
    </Routes>
    </>
  )
}

export default App
