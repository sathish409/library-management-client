import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../../sidebar/Sidebar";

export const UserLayout = ({ children, title }) => {
  return (
    <div className="d-flex min-vh-100">
      <div className="side-menu bg-dark text-light">
        <Sidebar />
      </div>
      <div className="right-content w-100">
        <Header />
        <div className="p-3">
          <h4>{title}</h4>
          <hr />
        </div>

        <main className="main p-3">{children}</main>

        <Footer />
      </div>
    </div>
  );
};
