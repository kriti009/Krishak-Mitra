import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";

const LoginLayout = ({ children, noNavbar, noFooter }) => (
    <Container fluid>
      <Row>
        {/* <MainSidebar /> */}
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 1 }}
          md={{ size: 9, offset: 1 }}
          sm="12"
          tag="main"
        >
          {children}
        </Col>
      </Row>
      <Row className="fixed-bottom">
        <Col>
          {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
);
LoginLayout.propTypes = {
    /**
     * Whether to display the navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
  };
  
  LoginLayout.defaultProps = {
    noNavbar: true,
    noFooter: false
  };
  
export { LoginLayout};