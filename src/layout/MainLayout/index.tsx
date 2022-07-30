import React from "react";
import Navbar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";
import constants from "../../utils/constants";

// import Footer from "../../components/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="container">
        <SideMenu menuItems={constants.menuItems} />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
