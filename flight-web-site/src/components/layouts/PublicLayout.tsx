import { Container, Paper, useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import HorizontalMenu from "../HorizontalMenu";
import SideBarMenu from "../SideBarMenu";
import SmallFooter from "../SmallFooter";

type LayoutProps = {
  children: ReactNode;
};

function PublicLayout({ children }: LayoutProps) {
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
        <main>{children}</main>
        <section>
        <Container component="footer" style={{ position: "fixed", bottom: "0", maxWidth: "100%" }}>
          <Footer />
        </Container>
        </section>
      </div>
    )
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
          <SmallFooter />
        </Container>
      </section>
    </>
  );
}

export default PublicLayout;
