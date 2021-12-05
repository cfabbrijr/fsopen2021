import React from 'react';
// Code developed by Carlos Fabbri Jr for the Course FSOpen2021
//Date : December 02, 2021 tru December 05, 2021

const Header = (props) => {
 // console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
 // console.log(props)
  return (
    <div>
      <p>
      {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
// console.log(props)
  return (
    <div>
    <Part name={props.part[0].name} exercises={props.part[0].exercises}/>
    <Part name={props.part[1].name} exercises={props.part[1].exercises}/>
    <Part name={props.part[2].name} exercises={props.part[2].exercises}/>
   </div>
 )
}


const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}
      </p>
    </div>
  )
}


const App = () => {

  const curso = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  //console.log(parts)
  return (
    <div>
      <Header course={curso}/>
      <Content part={parts} />
      <Total part={parts} />
    </div>
  );
}

export default App;
