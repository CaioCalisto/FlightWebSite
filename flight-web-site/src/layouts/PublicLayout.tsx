import { Container, Divider, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalMenu from "../components/navs/HorizontalMenu";
import SideBarMenu from "../components/navs/SideBarMenu";
import SmallFooter from "../components/SmallFooter";

function PublicLayout() {
  const medium = useMediaQuery("(min-width:768px)");

  if (medium) {
    return (
      <>
        <header>
          <Container component="header" style={{ maxWidth: "100%" }}>
            <Header />
          </Container>
        </header>
        <nav>
          <Container style={{ padding: "0", maxWidth: "100%" }}>
            <HorizontalMenu />
          </Container>
        </nav>
        <Divider />
        <main>
          <Container style={{ maxWidth: "100%" }}>
            <Outlet />
          </Container>
        </main>
        <Divider />
        <footer>
          <Container
            component="footer"
            style={{ position: "fixed", bottom: "0", maxWidth: "100%" }}
          >
            <Footer />
          </Container>
        </footer>
      </>
    );
  }

  return (
    <>
      <header>
        <Container component="header">
          <Header />
        </Container>
      </header>
      <nav>
        <Container style={{ maxWidth: "100%" }}>
          <SideBarMenu />
        </Container>
      </nav>
      <Divider />
      <main>
      <Container style={{ maxWidth: "100%" }}>
            <Outlet />
          </Container>
      </main>
      <Divider />
      <footer>
        <Container
          component="footer"
          style={{ position: "fixed", bottom: "0" }}
        >
          <SmallFooter />
        </Container>
      </footer>
    </>
  );
}

export default PublicLayout;
