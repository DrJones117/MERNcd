import { useState } from 'react'
import './App.css'

import {Routes, Route, Link} from 'react-router-dom'
import DisplayAuthors from './views/DisplayAuthors'
import AddAuthor from './views/AddAuthor'
import EditAuthor from './views/EditAuthor'


function App() {

  return (
    <>
      <h1>Welcome</h1>
      <Link to="/authors/create" style={{"color": "green"}}>Create author | </Link>
      <Link to="/authors" style={{"color": "green"}}> | View authors</Link>
      <Routes>
        <Route path="/authors" element={<DisplayAuthors />}/>
        <Route path="/authors/create" element={<AddAuthor />}/>
        <Route path="/authors/:id/update" element={<EditAuthor />}/>
      </Routes>
    </>
  )
}

export default App