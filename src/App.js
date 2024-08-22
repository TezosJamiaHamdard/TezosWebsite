import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Page1 from './components/FirstPage/Page1'
import Page2 from './components/SecPage/PageSec'
import Page3 from './components/ThirdPage/Page3'
import Pagefour from './components/FourPage/Pagefour'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Page1/>
      <Page3/>
      <Page2/>
      <Pagefour/>
      <Footer/>
    </div>
  )
}

export default App
