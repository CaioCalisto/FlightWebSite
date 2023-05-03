import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function SideBarMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        &#9824;
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
      </Offcanvas.Body>
      </Offcanvas>
  
    </>
  );
}

export default SideBarMenu;
