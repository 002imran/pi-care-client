import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/course-list")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    });
    return (
      <div>
        <h2>Our Courses</h2>
        <div>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/course/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
      </div>
    );
};

export default LeftSideNav;