import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

export default function AuthNavbar() {
  return (
    <>
      <Navbar
        className="navbar-top navbar-horizontal navbar-dark"
        expand="md"
      >
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            Лого
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
        </Container>
      </Navbar>
    </>
  );
};

AuthNavbar.propTypes = {};
AuthNavbar.defaultProps = {};
