import React from 'react'
import style from "./BannerIntro.module.css";
import GetStarted from './GetStarted';
import {FaArrowRight  } from "react-icons/fa";

const BannerIntro = () => {
  return (
    <div className={style.container}>
        {/* left cont  */}
      <div className={style.leftCont}>
        <div className={style.textContent}>
            <h1>All Your Business Banking In One Platform</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam iusto dolorum! Vero labore minus accusamus aliquam maxime, ullam consectetur!</p>
            <div>
                <GetStarted />
            </div>

            <div className={style.link}>
                <p>Already Started?</p>
                <p>Finish your application</p>
            </div>
        </div>
        <div className={style.imageCont}>
            <img src="https://img.freepik.com/free-photo/young-beautiful-girl-gray-hoody-holding-credit-card-looking-camera-with-smile-standing-orange-background_141793-24307.jpg?w=996&t=st=1704352351~exp=1704352951~hmac=0ef6cad955978a07956ee53e09d3e3468f69ae01311597bd20f711721a825570" alt="" width={"500px"} />
        </div>
      </div>

        {/* right cont  */}
      <div className={style.rightCont}>
        <img src="https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74366.jpg?size=626&ext=jpg&uid=R130746349&ga=GA1.1.1257944628.1683352118&semt=ais" alt="" />
        <div className={style.instantCardCont}>
            <div className={style.arrow}>
                <p><FaArrowRight /></p>
            </div>
            <div className={style.instantCard}>
                <span>Instant card control</span>
                <span>Lorem ipsum dolor sit amet</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerIntro
