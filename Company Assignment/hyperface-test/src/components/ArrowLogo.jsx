import React from 'react'
import {FaArrowRight  } from "react-icons/fa";
import style from "./ArrowLogo.module.css";

const ArrowLogo = () => {
  return (
    <div className={style.arrow}>
        <p><FaArrowRight /></p>
    </div>
  )
}

export default ArrowLogo
