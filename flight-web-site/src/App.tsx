import { Route, Router, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
