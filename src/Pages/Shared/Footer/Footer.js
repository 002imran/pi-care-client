import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
 } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div style={{ marginTop: "50rem" }}>
        <MDBFooter className="bg-secondary text-white text-center text-md-start">
          <MDBContainer className="p-4">
            <MDBRow>
              <MDBCol lg="6" md="12" className="mb-4 mb-md-0 text-white p-3 rounded-5">
                <h5 className="text-uppercase">PiCare</h5>

                <p>
                  Its a educational institue for diffrent kind of people, we
                  offer a lots of online and ofline course.People can join here
                  and get their best courses in a low price.
                </p>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Visit</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <p to="/courses" className="text-white">
                      Courses
                    </p>
                  </li>
                  <li>
                    <p to="/blog" className="text-white">
                      Blog
                    </p>
                  </li>
                  <li>
                    <p to="/fqa" className="text-white">
                      FQA
                    </p>
                  </li>
                  
                </ul>
              </MDBCol>
{/* 
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol> */}

              <div className='mt-4 fs-4 d-flex gap-3 align-items-center justify-content-center'>
                <BsFacebook></BsFacebook>
                <BsInstagram></BsInstagram>
                <BsWhatsapp />
                <BsLinkedin />
              </div>
            </MDBRow>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright: PiCare
          </div>
        </MDBFooter>
      </div>
    );
};

export default Footer;