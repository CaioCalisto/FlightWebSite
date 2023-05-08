import { Container, Divider, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalMenu from "../components/HorizontalMenu";
import SideBarMenu from "../components/SideBarMenu";
import SmallFooter from "../components/SmallFooter";

function PublicLayout() {
  const medium = useMediaQuery("(min-width:768px)");

  if (medium) {
    return (
      <div>
        <section>
          <Container component="header" style={{ maxWidth: "100%" }}>
            <Header />
          </Container>
        </section>
        <section>
          <Container style={{ padding: "0", maxWidth: "100%" }}>
            <HorizontalMenu />
          </Container>
        </section>
        <Divider />
        <main>
          <Container style={{ maxWidth: "100%" }}>
            <Outlet />
          </Container>
        </main>
        <Divider />
        <section>
          <Container
            component="footer"
            style={{ position: "fixed", bottom: "0", maxWidth: "100%" }}
          >
            <Footer />
          </Container>
        </section>
      </div>
    );
  }

  return (
    <>
      <section>
        <Container component="header">
          <Header />
        </Container>
      </section>
      <section>
        <Container style={{ maxWidth: "100%" }}>
          <SideBarMenu />
        </Container>
      </section>
      <Divider />
      <main>
      <Container style={{ maxWidth: "100%" }}>
            <Outlet />
          </Container>
      </main>
      <Divider />
      <section>
        <Container
          component="footer"
          style={{ position: "fixed", bottom: "0" }}
        >
          <SmallFooter />
        </Container>
      </section>
    </>
  );
}

export default PublicLayout;
