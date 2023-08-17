import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layouts;
