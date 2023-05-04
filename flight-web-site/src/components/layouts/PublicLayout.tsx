import { Container, Paper, useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import HorizontalMenu from "../HorizontalMenu";
import SideBarMenu from "../SideBarMenu";

type LayoutProps = {
  children: ReactNode;
};

function PublicLayout({ children }: LayoutProps) {
  const medium = useMediaQuery("(min-width:768px)");

  if (medium) {
    return (
      <>        
        <section>
          <Container component="header" style={{ margin: "0", maxWidth: "100%" }}>
            <Header />
          </Container>
        </section>
        <section>
          <Container>
           <HorizontalMenu />
          </Container>
        </section>
        <main>{children}</main>
        <section>
        <Container component="footer" style={{ position: "fixed", bottom: "0" }}>
          <Footer />
        </Container>
        </section>
      </>
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
        <Container>
          <SideBarMenu />
        </Container>
      </section>
      <main>{children}</main>
      <section>
        <Container component="footer" style={{ position: "fixed", bottom: "0"}}>
          <Footer />
        </Container>
      </section>
    </>
  );
}

export default PublicLayout;
