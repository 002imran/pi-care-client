import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import CourseList from "../Pages/Shared/CourseList/CourseList";

const Main = () => {
    return (
      <div>
        <Header></Header>
          <Row>
          
          <Col lg="9">
            <Container className='ms-5'>
                <Outlet></Outlet>
            </Container>
          </Col>
          <Col lg="3">
            <CourseList></CourseList>
          </Col>
        </Row>
      
        <Footer></Footer>
      </div>
    );
};

export default Main;