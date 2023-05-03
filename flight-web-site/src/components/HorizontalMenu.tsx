import "./HorizontalMenu.css";

import { Col, Row, Stack } from "react-bootstrap";

function HorizontalMenu() {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="d-flex justify-content-center"
      style={{ width: "100%", padding: "1em 1em 1em 1em", backgroundColor: "rgb(218, 212, 212)" }}
    >
      <span>&#9992; Flights</span>
      <div className="vr" />
      <span>&#128665; Car Hire</span>
      <div className="vr" />
      <span>&#127977; Hotels</span>
      {/* > 768px */}
      {/* <Row className="align-items-center">
        <Col>
          <span>&#9992; Flights</span>
        </Col>
        <Col>
          <span>&#128665; Car Hire</span>
        </Col>
        <Col>
          <span>&#127977; Hotels</span>
        </Col>
      </Row> */}
    </Stack>
  );
}

export default HorizontalMenu;
