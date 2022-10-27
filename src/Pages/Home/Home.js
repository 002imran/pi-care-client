// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';

// const Home = () => {
//     const allCoures = useLoaderData();
//     console.log(allCoures, 'from home');
//     return (
//         <div>
//             <h2>Total Courses: {allCoures.length}</h2>
//             {
//                 allCoures.map(courses =><CourseDetailsCard
//                     key = {courses.id}
//                     courses = {courses}
//                 >
//                 </CourseDetailsCard>)
//             }
//         </div>
//     );
// };

// export default Home;



import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../Shared/CourseDetailsCard/CourseDetailsCard';

const Home = () => {
    const allCourses = useLoaderData();
     return (
      <div>
        {allCourses.map((courses) => (
          <CourseDetailsCard key={courses.id} courses={courses}></CourseDetailsCard>
        ))}
      </div>
    );
};

export default Home;