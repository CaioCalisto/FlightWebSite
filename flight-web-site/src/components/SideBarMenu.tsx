import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";

function SideBarMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        &#9824;
      </Button>

      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-start flex-grow-1 pe-3">
            <Nav.Link href="#action1"><span>&#9992; Flights</span></Nav.Link>
            <Nav.Link href="#action2"><span>&#128665; Car Hire</span></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
  
    </>
  );
}

export default SideBarMenu;
