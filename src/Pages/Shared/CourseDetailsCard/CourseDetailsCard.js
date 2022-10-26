import React from 'react';
import './CourseDetailsCard.css';
const CourseDetailsCard = ({courses}) => {
    
    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-12 g-3 pb-3">
       <div className="col">
            <div className="card">
              <img src={courses.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{courses.title}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
   
    );
};

export default CourseDetailsCard;