import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isAdminPage = pathname.includes('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && (
        <Navbar isScrolled={isScrolled} />
      )}
      <main className={`flex-grow ${isAdminPage ? 'pt-0' : 'pt-16'}`}>
        <Outlet />
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default Layout;