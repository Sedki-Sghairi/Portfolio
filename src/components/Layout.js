import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children, light }) => {
  
  return (
    <>
      <Navbar light={light}/>
      {children}
    </>
  )
}

export default Layout
