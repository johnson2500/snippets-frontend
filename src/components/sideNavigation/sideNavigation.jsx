import React from 'react';
import { Nav } from 'react-bootstrap';
import './sideNav.css';

const Side = () => (
  <>
    <Nav
      className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
    >
      <div className="sidebar-sticky" />
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

  </>
);
export default Side;
