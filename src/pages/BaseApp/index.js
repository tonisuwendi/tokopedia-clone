import { cx } from "@emotion/css";
import React, { useState } from "react";
import { Header } from "../../components";
import { containerWrapper } from "./styles";

const BaseApp = ({ children }) => {
  const [bgDarkOverlay, setBgDarkOverlay] = useState(false);
  return (
    <>
      <Header bgDarkOverlay={(data) => setBgDarkOverlay(data)} />
      {bgDarkOverlay && <div className="bgdark-overlay"></div>}
      <main>
        <div className={cx(containerWrapper)}>{children}</div>
      </main>
    </>
  );
};

export default BaseApp;
