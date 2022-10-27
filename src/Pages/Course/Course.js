import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseItems = useLoaderData();
    console.log(courseItems);
    const {title,img, body} = courseItems;
    return (
      // <div>
      //     <h2>Our Current Courses: {courseItems.img}</h2>
      //     <img src={courseItems.img} alt=' '/>
      // </div>

      <div className="row row-cols-1 row-cols-md-12 row-cols-lg-12 g-3 pb-3 mt-5 container">
        <div className="col">
          <div className="card gap-2 me-5">
            <h5 className="card-title text-center my-3 fs-3">{title}</h5>
            <img
              src={img}
              className="card-img-top px-5"
              style={{ height: "50vh" }}
              alt="..."
            />
            <div className="card-body">
              {body}
              {/* <p className="card-text">
                  {body.length > 250 ? 
              <>
                {body.slice(0, 20) + "..."}{" "}
                <Link to={`/course-news/${id}`}>Read More</Link>
              </>
             : 
              body
            }
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;