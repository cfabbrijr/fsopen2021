// Code to exercise_1.10 unicafe*
// Developed by Carlos Fabbri Jr on december 10, 2021

import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statisticsline = ({ text , value, textend }) => {
  return (
    <div>
      {text} {value} {textend}
    </div>
  )
}




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
            <Statisticsline text="Good" value={good}/>
            <Statisticsline text="Neutral" value={neutral}/>
            <Statisticsline text="Bad" value={bad}/>
            <Statisticsline text="All" value={all}/>
            <Statisticsline text="Good" value={good}/>
            <Statisticsline text="Average" value={average = ((good*1 + neutral*0 + bad*-1)/all)}/>
            <Statisticsline text="Positive" value={(positive/all)*100} textend="%"/>
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
  
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPositive(positive + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <div>

      <div><h1>Give Feedback</h1></div>

    <Button handleClick={handleGood} text='Good'/>
    <Button handleClick={handleNeutral} text='Neutral' />
    <Button handleClick={handleBad} text='Bad'/>

    <Statistics good={good} bad={bad} neutral={neutral} all={all} positive={positive} average={average}/>

    </div>
  )
}

export default App;
