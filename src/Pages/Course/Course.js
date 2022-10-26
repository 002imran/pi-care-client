import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseItems = useLoaderData();
    console.log(courseItems);
    return (
        <div>
            <h2>Our Current Courses: {courseItems.img}</h2>
            <img src={courseItems.img} alt=' '/>
        </div>
    );
};

export default Course;