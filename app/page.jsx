'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import LoadingPage from './loading'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses')
      const data = await response.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, []);

  if(loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome to App!</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage