import React from 'react'
import style from "./Navbar.module.css";
import { FaAngleDown, FaArrowRight, FaGlobe  } from "react-icons/fa";
import GetStarted from './GetStarted';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className= {style.logo}>
            <p><FaGlobe /></p>
            <h3>nova</h3>
      </div>

        {/* Links  */}
      <div className={style.linksCont}>
        <div>
            <p>Business Checking</p>
            <FaAngleDown />
        </div>
        <div>
            <p>Solution</p>
            <FaAngleDown />
        </div>
        <div>
            <p>Resources</p>
            <FaAngleDown />
        </div>
        <div>
            <p>Results</p>
        </div>
        <div>
            <p>Contact</p>
            <FaAngleDown />
        </div>
      </div>

        {/* Authentication  */}
      <div className={style.authCont}>
        <p>Log In</p>
        <GetStarted />
      </div>
    </div>
  )
}

export default Navbar
