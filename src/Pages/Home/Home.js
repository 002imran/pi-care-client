import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';

const Home = () => {
    const allCoures = useLoaderData();
    return (
        <div>
            <h2>Total Courses: {allCoures.length}</h2>
            {
                allCoures.map(courses =><CourseDetailsCard
                    key = {courses.id}
                    courses = {courses}
                >
                </CourseDetailsCard>)
            }
        </div>
    );
};

export default Home;