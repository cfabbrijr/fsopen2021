// Code with Course component for App on fsopen2021 Helsinki course
// Developed by Carlos Fabbri Jr on december 31, 2021.

import React from 'react';


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

  export default Course;
  