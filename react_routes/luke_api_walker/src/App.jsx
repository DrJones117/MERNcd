// worked with Caleb M

import {useNavigate, useParams, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import DisplayPerson from './components/DisplayPerson';
import DisplayPlanet from './components/DisplayPlanet';
// https://swapi.dev/api/




function App() {
  const navigate = useNavigate();


  return (
    <>
      <Form navigate={navigate}/>
      <Routes>
        <Route path={"/people/:number"} element={<DisplayPerson />} />
        <Route path={"/planets/:number"} element={<DisplayPlanet />} />
      </Routes>
    </>
  )
}

export default App
