import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <Navbar onSidebarToggle={() => {}} />
    <main className="flex-grow-1">{children}</main>
  </div>
);

export default Layout;
