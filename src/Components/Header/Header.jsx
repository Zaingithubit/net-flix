import React from 'react'
import Logo from "../../netflix-logo-.png"
import {Link} from "react-router-dom"
 import { ImSearch} from "react-icons/im"

const Header = () => {
    // console.log(Logo)
  return (
    <nav className="header">
        <img src={Logo} alt="" />
        <div>
            <Link to="">Tv-Show</Link>
            <Link to="">Movies</Link>
            <Link to="">Recently-Added</Link>
            <Link to="">Mylist</Link>
        </div>
        <ImSearch></ImSearch>
    </nav>
  )
}

export default Header
