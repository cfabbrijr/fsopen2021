// Code to exercise_1.9 unicafe*
// Developed by Carlos Fabbri Jr on december 09, 2021

import React, { useState } from 'react'

const Statistics = ({good, bad, neutral, all, positive, average}) => {

  if (all === 0) {
    return (
      <div>
       <h2> No feedback given</h2>
      </div>
    )
  }
  
  return (

    <div>
          <div>
            <h1>Statistics</h1>
          </div>
          <div>
            Good {good}<br></br>
            Neutral {neutral}<br></br>
            Bad {bad} <br></br>
            All {all} <br></br>
            Average {average = ((good*1 + neutral*0 + bad*-1)/all)} <br></br>
            Positive {(positive/all)*100} % <br></br>
          </div>
    </div>

  )

}


const App = () => {
  // save clicks of each button to its own state
  // Salve os clicks de cada botão em seu próprio estado (Portuguese )
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  let average = 0

  return (
    <div>

      <div><h1>Give Feedback</h1></div>
    
    <button onClick={() => {setGood(good + 1) ; setAll(all + 1); setPositive(positive + 1)}} >
     Good 
    </button>
    <button onClick={() => {setNeutral(neutral + 1);  ; setAll(all + 1)}} > Neutral </button>
    <button onClick={() => {setBad(bad + 1)  ; setAll(all + 1)}} > Bad </button>

    <Statistics good={good} bad={bad} neutral={neutral} all={all} positive={positive} average={average}/>

    </div>
  )
}

export default App;
