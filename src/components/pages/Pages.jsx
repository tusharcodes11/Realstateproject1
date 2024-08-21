import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Price from "../home/price/Price"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pricing' element={<Price />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default Pages
