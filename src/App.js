import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Page1 from './components/FirstPage/Page1';
import Page2 from './components/SecPage/PageSec';
import Page3 from './components/ThirdPage/Page3';
import Pagefour from './components/FourPage/Pagefour';
import Footer from './components/footer/Footer';
import Blog from './components/blogs/Blog';
import About from './components/about/About';
import Members from './components/members/Members';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const contactRef = useRef(null);
  const EventRef = useRef(null);

  return (
    <Router>
      <ScrollToTop /> {/* This ensures the page scrolls to the top on route changes */}
      <Navbar contactRef={contactRef} EventRef={EventRef} />
      <Routes>
        <Route path="/" element={
          <>
            <Page1 /> 
            <Page3 />
            <Page2 EventRef={EventRef}/>
            <Pagefour contactRef={contactRef}/>
          </>
        } />

        <Route path="/blogs" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/members" element={<Members/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
