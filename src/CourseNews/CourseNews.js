import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseNews = () => {
    const detailsInformation = useLoaderData();
    const { title, details } = detailsInformation;
    return (
      <div className="row row-cols-1 row-cols-md-8 row-cols-lg-12 g-3 pb-3">
        <div className="col">
          <div className="card gap-2 me-5">
            <h5 className="card-title text-center my-3 fs-3">
              {title}
            </h5>
            {/* <img
              src={courses.img}
              className="card-img-top"
              style={{ height: "50vh" }}
              alt="..."
            /> */}
            <div className="card-body">
              <p className="card-text">
                 {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseNews;