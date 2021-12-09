// Code to exercise_1.6 unicafe*
// Developed by Carlos Fabbri Jr on december 09, 2021

import React, { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  // Salve os clicks de cada botão em seu próprio estado (Portuguese )
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>

      <div><h1>Give Feedback</h1></div>
    
    <button onClick={() => setGood(good + 1)} > Good </button>
    <button onClick={() => setNeutral(neutral + 1)} > Neutral </button>
    <button onClick={() => setBad(bad + 1)} > Bad </button>


    <div><h1>Statistics</h1></div>

    Good {good} <br></br>
    Neutral {neutral} <br></br>
    Bad {bad}
      
    </div>
  )
}

export default App;
