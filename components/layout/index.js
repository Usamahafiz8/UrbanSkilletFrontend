// Layout.js or Layout.tsx
import React from "react";
import Navbar from "../header";
import { Footers } from "../footers";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footers />
      </footer>
    </div>
  );
};

export default Layout;
