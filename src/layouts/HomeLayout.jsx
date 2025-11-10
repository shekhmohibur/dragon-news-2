import { Outlet } from 'react-router';
import Header from '../components/Header';
import LeftAside from '../components/homelayout/LeftAside';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section className='my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;