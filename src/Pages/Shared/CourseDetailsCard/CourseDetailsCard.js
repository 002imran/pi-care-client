import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './CourseDetailsCard.css';

const ref = React.createRef();
const CourseDetailsCard = ({courses}) => {
    const {title, img, body, id} = courses;
    return (
      <div className="row row-cols-1 row-cols-md-12 row-cols-lg-12 g-3 pb-3 container mt-5">
        <div className="col">
          <div className="card gap-2 me-5">
            <div className="d-flex align-items-center justify-content-center">
              <h5 className="card-title text-center my-3 fs-3">{title}</h5>
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button onClick={toPdf} className="ms-5 w-25 border-0">
                    Download PDf
                  </button>
                )}
              </Pdf>
            </div>
            <img
              src={img}
              className="card-img-top px-5"
              style={{ height: "50vh" }}
              alt="..."
            />
            <div className="card-body" ref={ref}>
              {body}
              <Button className="w-25 d-flex justify-content-center mt-2">
                <Link
                  to={`/checkout`}
                  className="text-decoration-none text-white"
                >
                  Premium
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetailsCard;