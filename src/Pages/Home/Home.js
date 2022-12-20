import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';
import styles from './Home.module.css';

const Home = () => {
    const allCourses = useLoaderData();
     return (
       <div className={styles.courseContainer}>


      <div className={styles.productContainer}>
        {allCourses.map((courses) => (
          <CourseDetailsCard key={courses.id} courses={courses}></CourseDetailsCard>
        ))}
      </div>
      </div>
      
    );
};

export default Home;