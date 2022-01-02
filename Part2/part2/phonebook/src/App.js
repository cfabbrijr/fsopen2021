// Code to exercise 2.8 Phonebook Step3
// Developed by Carlos Fabbri Jr for FSopen2021 
// on January 2, 2022


import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1,
      phone: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  // Method to add the name inputed by user on page

  const addRecord = n => {
    n.preventDefault()

  // variable created to receive the record ( name, id, phone) entered by user
    const addedRecord = persons.map(person => person.name)
    if (addedRecord.includes(newName.trim())) {
      alert(`${newName} is already added to phonebook`)
      setNewName('') // reset the input value field
      setNewPhone('') // reset the phone input value field
    } else {
      setPersons(persons.concat({ name: newName , id: persons.length + 1 , phone: newPhone}))  // correct way to add the record entered on the persons array
      setNewName('') // reset the input value field
      setNewPhone('') 
    }
  }

  // Method to handle with the change on input value fied
  const handleNameInput = (h) => {
      setNewName(h.target.value)
      }

  const handlePhoneInput = (p) => {
    setNewPhone(p.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addRecord}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleNameInput}
                />
        </div>
        <div>
          phone: <input 
                  value={newPhone} 
                  onChange={handlePhoneInput}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
      </div>
    </div>
  )
}

export default App;
