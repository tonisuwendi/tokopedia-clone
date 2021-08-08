import React from "react";
import { Header } from "../../components";

const BaseApp = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BaseApp;
