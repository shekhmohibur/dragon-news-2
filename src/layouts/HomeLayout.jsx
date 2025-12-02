import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

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
      <main className="grid grid-cols-12 mt-5 gap-5">
        <aside className="left_aside col-span-3">
          <LeftAside/>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="right_aside col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
