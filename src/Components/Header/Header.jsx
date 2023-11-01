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
            <Link to="/tv-show">Tv-Show</Link>
            <Link to=".movies">Movies</Link>
            <Link to="/recently-added">Recently-Added</Link>
            <Link to="/mylist">Mylist</Link>
        </div>
        <ImSearch></ImSearch>
    </nav>
  )
}

export default Header
