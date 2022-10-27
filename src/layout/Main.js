import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
      <div>
        <Header></Header>
        {/* <Outlet></Outlet> */}

        {/* <Container> */}
        <Row>
          
          <Col lg="8">
            <Container className='ms-5'>
                <Outlet></Outlet>
            </Container>
          </Col>
          <Col lg="4">
            <LeftSideNav></LeftSideNav>
          </Col>
        </Row>
        {/* </Container> */}

        <Footer></Footer>
      </div>
    );
};

export default Main;