import { Button, Container, Navbar, Stack, ThemeProvider } from "react-bootstrap"
import { Route, Router, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import HorizontalMenu from "./components/HorizontalMenu"
import './App.css'
import SideBarMenu from "./components/SideBarMenu"

function App() {
  
  return (
    <Container fluid>
      <Navbar style={{ padding: "0" }}>
        <Header />
      </Navbar>
      <Navbar className="sidebar-menu-btn" style={{ position: "fixed", padding: "0", margin: "0", left: "0", top: "0"}}>
        <SideBarMenu />
      </Navbar>
      <Navbar className="horizontal-menu" style={{ padding: "0" }}>
        <HorizontalMenu />
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
