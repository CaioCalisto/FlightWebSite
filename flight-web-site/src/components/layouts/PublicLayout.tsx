import { Container, Divider, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HorizontalMenu from "../HorizontalMenu";
import SideBarMenu from "../SideBarMenu";
import SmallFooter from "../SmallFooter";

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
          <Container>
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
