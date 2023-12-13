import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import './App.css'
import axios from 'axios'

import DisplayAuthors from './views/DisplayAuthors'
import AddAuthor from './views/AddAuthor'
import EditAuthor from './views/EditAuthor'


function App() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Grabs all of the authors when the page renders
  useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(response => {
            console.log(response.data);
            setAuthors(response.data);
            setLoaded(true);
        })
        .catch(err => console.log(err))
  }, []);

  const addAuthor = (author) => setAuthors([...authors, author]);

  const updateAuthor = (editedAuthor, id) => {
    const newAuthors = authors.map(author => author._id === id ? editedAuthor : author)
    setAuthors(newAuthors);
  }

  return (
    <>
      <h1>Welcome</h1>
      <Link to="/authors/create" style={{"color": "green"}}>Create author | </Link>
      <Link to="/authors" style={{"color": "green"}}> | View authors</Link>
      <Routes>
        <Route path="/authors" element={<DisplayAuthors authors={authors} setAuthors={setAuthors} loaded={loaded}/>}/>
        <Route path="/authors/create" element={<AddAuthor addAuthor={addAuthor}/>}/>
        <Route path="/authors/:id/update" element={<EditAuthor updateAuthor={updateAuthor}/>}/>
      </Routes>
    </>
  )
}

export default App