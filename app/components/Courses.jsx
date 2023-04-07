import React from 'react'
import Link from 'next/link'

const Courses = ({courses}) => {
  return (
    <div className="courses">
        {courses.map((course) => (
            <div key={course.id} className="card">
                <h2>{course.title}</h2>
                <small>Level: {course.level}</small>
                <p>{course.description}</p>
                <Link href={course.link}>
                    Go to Course
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Courses