import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header />
        <section className="my-3">
            <LatestNews />
        </section>
        <nav>
            <NavBar/>
        </nav>
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
