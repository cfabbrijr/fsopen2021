// Code to exercise_1.11 unicafe*
// Developed by Carlos Fabbri Jr on december 10, 2021

import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  // component created to handle user interaction on page
  // Each button will have its own method and text label 
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statisticsline = (props) => <tr><td>{props.textinicio}</td><td>{props.value}</td><td>{props.textend}</td></tr>
// component created to deal with the display of statistics'values calculated on each line


const Statistics = ({good, bad, neutral, all, positive, average}) => {
// component created to show the statistics values of user choices on the page buttons
// It has a test for all variable to conditionally show the user a initial message or the statistics panel
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

          <table>
            <tbody>
              <Statisticsline textinicio="Good" value={good}/>
              <Statisticsline textinicio="Neutral" value={neutral}/>
              <Statisticsline textinicio="Bad" value={bad}/>
              <Statisticsline textinicio="All" value={all}/>
              <Statisticsline textinicio="Average" value={average=((good*1 + neutral*0 + bad*-1)/all)}/>
              <Statisticsline textinicio="Positive" value={(positive/all)*100} textend="%"/>
            </tbody>
          </table>
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
    // function call to handle what to do when user clicks the good button
    setGood(good + 1)
    setAll(all + 1)
    setPositive(positive + 1)
  }

  const handleNeutral = () => {
    // function call to handle what to do when user clicks the neutral button
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    // function call to handle what to do when user clicks the bad button
    setBad(bad + 1)
    setAll(all + 1)
  }


  return (
    <div>

      <div><h1>Give Feedback</h1></div>

    <Button handleClick={handleGood} text='Good'/>
    <Button handleClick={handleNeutral} text='Neutral' />
    <Button handleClick={handleBad} text='Bad'/>

    <Statistics good={good} bad={bad} neutral={neutral} all={all} positive={positive }average={average}/>

    </div>
  )
}

export default App;
