// Initial code for exercise_2.4 courseinfo step 9
// Initial code structure supplied from Models Anwers @ Helsinki course stats
// Code developed by Carlos Fabbri Jr for the FSOpen2021 Course
// On December 27, 2021

import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({courses}) => {
  return (
      <div>
       <h2>{courses.map(course => <p key={course.id}>{course.name}</p>)}</h2>
      </div>
  )
}

const Part = ({courses}) => {
  return (
    <div>
      {courses.map(course => course.parts.map(part =>  <p key={part.id}>{part.name} has {part.exercises}  exercises</p> ))}
    </div>
 
  )
}

const Content = ({courses}) => {
  return (
      <div>
        <Part courses={courses} />
      </div>
  )
}

const Total = ({ courses }) => {

  const mostra = courses.map(course => course.parts.map(part =>  <p key={part.id}> {part.id} {part.exercises}</p> ))

    return (
    <div>
      Total of {mostra} exercises
    </div>
  ) 
}


const Course = ({courses}) => {

    return (
      <div>
        <Header key={courses.id} courses={courses} />
        <Content courses={courses} />
        <Total courses={courses}/>
      </div>
    )

}

const App = () => {
  const courses = [
    {
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
    },
    {
        id: 2,
        name: 'Node.js',
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
    },
  ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>

      <div>
        <Course courses={courses}/>
      </div>

    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
