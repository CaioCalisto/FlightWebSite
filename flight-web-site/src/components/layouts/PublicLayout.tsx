import { useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
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
          <Header />
        </section>
        <section>
          <HorizontalMenu />
        </section>
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <SideBarMenu />
      </section>
      <main>{children}</main>
    </>
  );
}

export default PublicLayout;
