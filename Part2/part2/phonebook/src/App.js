// Code to exercise 2.10 Phonebook Step5
// Developed by Carlos Fabbri Jr for FSopen2021 
// on January 7, 2022

import React, { useState } from 'react'
import Filter from './components/Filter'
import Personform from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setNewPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const handleNameInput = (h) => {setNewName(h.target.value)}   // Method to handle with the change on input value field

  const [newPhone, setNewPhone] = useState('')
  const handlePhoneInput = (p) => {setNewPhone(p.target.value)}   // Method to handle with the change on input value field

  const [filter, setFilter] = useState('')
  const handleSearchInput = (event) => {setFilter(event.target.value)}   // Method to handle with the change on input value field


  // Method to add the name inputed by user on page

  const addPerson = n => {
    n.preventDefault()

      // variable created to receive the record ( name, id, number) entered by user
      const addedPerson = persons.map(person => person.name)
      if (addedPerson.includes(newName.trim())) {
        alert(`${newName} is already added to phonebook`)
        setNewName('') // reset the input value field
        setNewPhone('') // reset the phone input value field
      } else {
        setNewPersons(persons.concat({ name: newName, number: newPhone, id: persons.length + 1 }))  // correct way to add the record entered on the persons array
        setNewName('') // reset the input value field
        setNewPhone('') 
      }
    }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleSearchInput={handleSearchInput}/>

      <h3>Add a new </h3>

      <Personform newName={newName} newPhone={newPhone} handleNameInput={handleNameInput} handlePhoneInput={handlePhoneInput} addPerson={addPerson}/>

      <h3>Numbers</h3>

      <Persons filter={filter} persons={persons}/>
      
    </div>
  )
}

export default App;
