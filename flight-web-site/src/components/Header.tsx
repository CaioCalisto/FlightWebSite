import './Header.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

function Header() {
  return (
    <Stack direction="horizontal" style={{ padding: "0 1em 0 1em" }}>
      <Row className="d-flex align-items-center" style={{ padding: "0 1em 0 1em" }}>
        <Col className="d-flex justify-content-start">
          <Image src="src/assets/ACME-logo.png" style={{ width: "30%" }} />
        </Col>
        <Col className="d-flex justify-content-end" style={{ gap: "1rem" }}>
          <Image src="src/assets/earth.png" style={{ width: "10%" }} className="earth-icon" />
          <Image src="src/assets/user.png" style={{ width: "10%" }} />        
        </Col>
      </Row>
    </Stack>
  );
}

export default Header;
