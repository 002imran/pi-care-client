import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Row from'react-bootstrap/Row';
import Pdf from "react-to-pdf";
import './CourseDetailsCard.css';

const ref = React.createRef();
const CourseDetailsCard = ({courses}) => {
    const {title, img, body, id} = courses;
    return (
      <div className="row row-cols-1 row-cols-md-12 row-cols-lg-12 g-2 pb-3 container">
     
      <div className="col">
          <div className="card gap-2 me-5">
            <div className="d-flex align-items-center justify-content-center">
              <h5 className="card-title text-center my-3 fs-3 pb-2">{title}</h5>
             
            </div>
            <img
              src={img}
              className="card-img-top px-5"
              style={{ height: "50vh" }}
              alt="..."
            />
            <div className="card-body" ref={ref}>
              {/* {body} */}
              {body.length > 100
            ? body.slice(0, 100) + "..."
            : body}
           
            
            </div>

            <div className='d-flex justify-content-between m-3'>
              <Button className="sm:w-25 d-flex justify-content-center mt-2">
                <Link
                  to={`/checkout`}
                  className="text-decoration-none text-white"
                >
                  Premium
                </Link>
              </Button>
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                  <button onClick={toPdf} className="ms-5 w-30 h-25 border-0 mt-2 py-1 rounded-2 px-2">
                    Download Pdf
                  </button>
                )}
              </Pdf>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetailsCard;