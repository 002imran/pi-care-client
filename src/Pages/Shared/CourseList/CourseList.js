import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-list")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });
  return (
    <div className="bg-dark m-4 rounded-bottom rounded-4 text-center">
      <h2 className="pt-5 text-white fs-2">Our Courses</h2>
      <div className="my-4 pt-4">
        {courses.map((course) => (
          <p key={course.id}>
            <Button variant="outline-secondary" size="lg" className="w-100">
              <Link
                to={`/course/${course.id}`}
                className="text-decoration-none text-white fs-3 py-1"
              >
                {course.name}
              </Link>
            </Button>{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CourseList;