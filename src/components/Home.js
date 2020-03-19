import React from 'react';
import Nav from './Nav';
import CoursesList from './CoursesList';
import './style.css'

function Home() {
  return (
    <div>
     <Nav />
    <CoursesList />
    </div>
  );
}

export default Home;
