import React from "react"
import Person from "./Person";

const Persons = ({filter, persons}) => {
return (
    <div>
    {filter ? 
      persons
            .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
            .map((person) => <Person key={person.id} person={person}/>)
      :
      persons.map((person) => <Person key={person.id} person={person}/>)
    }
  </div>
)

}

export default Persons;