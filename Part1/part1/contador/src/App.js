
import React, {useState} from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        O app é feito para pressionar os botões...
      </div>
    )
  }
  return (
    <div>
      Histórico de botões pressionados: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('E'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('D'))
    setRight(right + 1)
  }

//  debugger


  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='Esquerda'/>
      <Button handleClick={handleRightClick} text='Direita'/>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
