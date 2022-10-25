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

        <Container>
          <Row>
            <Col lg="4">
              <LeftSideNav></LeftSideNav>
            </Col>
            <Col lg="8">
              <Outlet>
                <h2>Mian part</h2>{" "}
              </Outlet>
            </Col>
          </Row>
        </Container>

        <Footer></Footer>
      </div>
    );
};

export default Main;