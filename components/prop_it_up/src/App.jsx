import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  return (
      <div className="App">
        { persons.map( person => {
          return <PersonComponent firstName = { person.firstName } lastName = { person.lastName } age = { person.age } hair = { person.hair }/>
        })}
      </div>
  );
}

export default App;
