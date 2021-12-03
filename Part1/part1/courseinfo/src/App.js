import React from 'react';
// Code developed by Carlos Fabbri Jr for the Course FSOpen2021
//Date : December 02, 2021 tru December 03, 2021

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = 'Fundamentals of React' exercises = {10}/>
      <Part part = 'Using props to pass data' exercises = {7}/>
      <Part part = 'State of a component' exercises = {14}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}


const App = () => {

  return (
    <div>
      <Header course = 'Half Stack application development'/>
      <Content/>
      <Total exercises1 = {10} exercises2 = {7} exercises3 = {14}/>
    </div>
  );
}

export default App;
