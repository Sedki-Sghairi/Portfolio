import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useState } from "react"
const Layout = ({ children, light }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar light={light} toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      {children}
      <Footer/>
    </>
  )
}
 
export default Layout
