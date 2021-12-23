// Initial code for exercise_2.3 courseinfo step 8
// Initial code structure supplied from Models Anwers @ Helsinki course stats
// Code developed by Carlos Fabbri Jr for the FSOpen2021 Course
// On December 22, 2021

import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return (
          <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const soma = course.parts.reduce((soma, course) => soma + course.exercises , 0)
  return(
    <p>Total of {soma} exercises</p>
  ) 
}

const Part = ({course}) => {
  return (
    <div>
      {course.parts.map(course => <p key={course.id}>{course.name} {course.exercises}</p>)}
    </div>
 
  )
}

const Content = ({course}) => {
  return (
    <div>
     <Part course={course}/>
    </div>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Adicionado para teste',
        exercises: 9,
        id: 4
      },
      {
        name: 'Adicionado para teste depois de 2.3',
        exercises: 13,
        id: 5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
