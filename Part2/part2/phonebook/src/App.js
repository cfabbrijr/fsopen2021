// Code to exercise 2.6 Phonebook Step1
// Developed by Carlos Fabbri Jr for FSopen2021 
// on January 1, 2022


import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  // Method to add the name inputed by user on page

  const addName = n => {
    n.preventDefault()

  // variable created to receive the name inputed by user
    const addedName = persons.map(person => person.name)
    if (addedName.includes(newName.trim())) {
      alert(`${newName} is already added to phonebook`)
      setNewName('') // reset the input value field
    } else {
      setPersons(persons.concat({ name: newName }))  // correct way to add the name inputed on the persons array
      setNewName('') // reset the input value field
    }
  }

  // Method to handle with the change on input value fied
  const handleNameInput = (h) => {
      setNewName(h.target.value)
      }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleNameInput}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App;
