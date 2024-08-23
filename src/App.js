import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Page1 from './components/FirstPage/Page1';
import Page2 from './components/SecPage/PageSec';
import Page3 from './components/ThirdPage/Page3';
import Pagefour from './components/FourPage/Pagefour';
import Footer from './components/footer/Footer';
import Blog from './components/blogs/Blog';
const App = () => {
  const contactRef=useRef(null);
  return (
    <>
    <Router>
      <Navbar contactRef={contactRef} />
      <Routes>
        <Route path="/" element={
          <>
          <Page1 /> 
          <Page3 />
          <Page2 />
          <Pagefour contactRef={contactRef}/>
          </>
          } />

        <Route path="/blogs" element={<Blog/>} />
      </Routes>
      <Footer />
      </Router>
      </>
  );
};

export default App;
