import React from 'react'
import "../Portfolio/PortfolioStyle.css"
import facebook from "./Image/new.png"
import twitter from "./Image/twiter.png"
import instagram from "./Image/instagram.png"
import pix from "./Image/bee.png"
import { Link } from "react-router-dom"

function Portfolio() {
  return (
    <div className="MainContainer">
      <div className="ContainerWrapper">
        <div className="Container-header">
          <h1 className="Text1">BDCL</h1>
          <h5 className="Text2">DEVELOPERS</h5>

          <div className="iconWrapper">
            <img src={facebook} alt="facebook.png" />
            <img src={twitter} alt="twitter.png" />
            <img src={instagram} alt="facebook.png" />

          </div>
        </div>
        <div className="body2">
          <div className="body-text">
            <h1 className="textbox">THE WORLD <br />WILL SEE YOU</h1>
          </div>

          <div className="picturewrapper">
            <img className="imageWrapper" src={pix} alt="" />
          </div>

          <div className="TEXT3">
            <h1>
              I LOVE CODING
            </h1>
          </div>


        </div>
        <div className="footer">
          <div className="footertext">
            <p><Link to="/" className="link">{"<"}</Link></p>
            <p>01</p>
            <p>/03</p>
            <p><Link to="/one" className="link">{">"}</Link></p>
          </div>
          <div className="Namewrapper">
            <h1>UYIEKPEN <br /> OSAZIE</h1>
          </div>

        </div>



      </div>


    </div>


  )
}

export default Portfolio
