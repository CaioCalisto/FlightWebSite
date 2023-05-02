import { Container, Navbar, Stack, ThemeProvider } from "react-bootstrap"
import { Route, Router, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <Container fluid>
      <Navbar sticky="top" style={{ padding: "0", margin: "0", width: "100%" }}>
        <Header />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar fixed="bottom">
        <Footer />
      </Navbar>
    </Container>
  )
}

export default App
