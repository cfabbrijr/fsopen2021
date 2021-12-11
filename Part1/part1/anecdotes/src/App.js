// Code solution for exercise 1.13 anecdotes
// Developed by Carlos Fabbri Jr on December 11, 2021

import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setAll] = useState([])

  const handleRandomAnecdote = () => {
    // this function generates random numbers between 0 and anecdotes.lenght minus one, due to Math.random limits
    // In this case between 0 and 6, which are the index of each anecdote on anecdotes array
    setSelected(Math.floor(Math.random()*(anecdotes.length)))
  }

  const handleVotes = () => {
    // This function populates the allVotes array with the index of the voted anecdote
    setAll(allVotes.concat(selected))
  }

  const counts = {};
  // this function register the frequency of each number voted
    for (const num of allVotes) {
      counts[num] = counts[num] ? counts[num] + 1 : 1
    }

  return (
    <>
    <div>
      {anecdotes[selected]}<br></br>
      Has {counts[selected]}  votes
    </div>
    <div>
    <button onClick={handleVotes}>vote</button>
    <button onClick={handleRandomAnecdote}>next anecdote</button>
    </div>
    </>
  )
}


export default App;
