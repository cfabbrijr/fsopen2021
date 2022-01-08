import React from 'react'

const Filter = ({filter, handleSearchInput}) => {
 return (
     
    <div>
    filter shown with a: <input value={filter} onChange={handleSearchInput}/>  
    </div>
    
 )
}

export default Filter 