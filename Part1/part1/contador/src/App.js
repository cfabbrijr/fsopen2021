
import React, {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

  return (
    <div>
    <h2>Um Contador bem simples </h2>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='Mais'
      />
      <Button
        onClick={setToZero}
        text='Zerar'
      />
            <Button
        onClick={decreaseByOne}
        text='Menos'
      />
    </div>
  )
}


export default App;
