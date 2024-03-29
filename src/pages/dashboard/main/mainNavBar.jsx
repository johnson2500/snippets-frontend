/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function MainNavBar() {
  return (
    <Nav variant="" defaultActiveKey="/home" className="navbar navbar-dark bg-warning">
      <Nav.Item>
        {Date.now()}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">
          <Button size="sm">Sign Out</Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

MainNavBar.propTypes = {};

MainNavBar.defaultProps = {};

export default MainNavBar;
