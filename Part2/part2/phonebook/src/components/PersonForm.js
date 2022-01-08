import React from "react"

const Personform = ({
                        addPerson, 
                        newName, 
                        handleNameInput, 
                        newPhone, 
                        handlePhoneInput
                    }) => {
    return (
        
      <form onSubmit={addPerson}>
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
    )
}

export default Personform;