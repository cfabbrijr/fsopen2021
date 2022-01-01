// Code with App component on fsopen2021 Helsinki course
// Developed by Carlos Fabbri Jr on december 31, 2021.
//Exercise2.5_step10 


import React from 'react';
import Course from './components/courses';


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

  export default App;