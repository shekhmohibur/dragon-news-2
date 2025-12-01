import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <aside className="left_aside"></aside>
        <section className="main">
          <Outlet />
        </section>
        <aside className="right_aside"></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
