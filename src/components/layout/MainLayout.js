import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* herder  */}
      <Header />
      {/* main area  */}
      <main className="main">{children}</main>

      {/* footer  */}
      <Footer />
    </div>
  );
};
