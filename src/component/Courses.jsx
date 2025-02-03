import React, { useEffect, useState } from 'react'
import SectionTitle from './ui/SectionTitle'
import Course from './Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const url = './courses.json'
      fetch(url)
      .then(res =>  res.json())
      .then(data => {
        console.log(data)
        setCourses(data)
      })
    }
    getCourses();
    
  }, []);

  return (
    <div className='px-16 py-12'>
      <SectionTitle title={'Explore Our Courses'} />   
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          courses.map((course) => <Course key={course.id} course={course} /> )
        }
      </div>
    </div>
  )
}

export default Courses