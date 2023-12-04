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

const OtherRoute = (prop) => {
  const { par } = useParams();
  const { C } = useParams();
  const { bgC } = useParams();

  return (
    isNaN(par) ? <h1 style={{color: C, backgroundColor: bgC, width: "1300px"}}>The Word is { par }</h1> : <h1>The Number is { par }</h1>
  )
}

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Welcome />}/>
      <Route path="/:par" element={<OtherRoute />}/>
      <Route path="/:par/:C/:bgC" element={<OtherRoute />}/>
    </Routes>
    </>
  )
}

export default App
