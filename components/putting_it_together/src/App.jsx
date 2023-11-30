import { useState } from 'react'
import './App.css'
import React from 'react'
import PersonComponent from './components/PersonComponent'



const persons = [
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hair": "black"},
  {"firstName": "Smith", "lastName": "John", "age": 88, "hair": "brown"},
  {"firstName": "Fillmore", "lastName": "Millard", "age": 50, "hair": "brown"},
  {"firstName": "Smith", "lastName": "Maria", "age": 62, "hair": "brown"}
]

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="App">
        { 
          persons.map((person) => 
            <PersonComponent firstName = { person.firstName } lastName = { person.lastName } age = { person.age } hair = { person.hair }/>
            )
          }
      </div>
    </>
  );
}

export default App;
