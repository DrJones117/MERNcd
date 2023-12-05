import { useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios';
import './App.css'
// https://swapi.dev/api/

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("https://swapi.dev/api/")
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Form/>
    </>
  )
}

export default App
