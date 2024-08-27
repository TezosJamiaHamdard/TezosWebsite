import React from 'react'
import './Footer.css'
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../../assets/logo.png'


function Footer() {
  return (
    <div className='footer-div'>
      {/* --------------- FOOTER --------------- */}
      <footer className='footer_div'>
        <div className="top-footer">
          <img src={Logo} alt="" className='logo' />
          <h2 style={{ color: "white" }}>FOLLOW US </h2>
          <div className="footer-social-icons">
            <div className="icon">
              <a href="https://www.instagram.com/tezosclub.jh?igsh=MXF5b3h2bDUweTlk" className="btn-icon" >
                <FaInstagram style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/TezosJamiaHamdard" className="btn-icon">
                <FaGithub style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/company/tezos-club-jamia-hamdard/" className="btn-icon">
                <FaLinkedinIn style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
            <div className="icon">
              <a href="/" className="btn-icon">
                <FaWhatsapp style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a href="https://youtube.com/@tezosjh?si=NZ40ocBmoLjIoTN6" className="btn-icon">
                <FaYoutube style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
            <div className="icon">
              <a href="https://x.com/Tezosclubjh?t=g_CSWx9n_vny9Id24Oizrw&s=09" className="btn-icon">
                <FaXTwitter style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
          </div>
          <h3 >Feedback or comments? Get in touch with us at reachout@tezos.com</h3>
          <h3 >For media inquiries please contact communications@tezos.foundation</h3>

        </div>
        <div className='mid-bottom'>

          <div className="middle-footer">
            <div className="general">
              <h2>General</h2>
              <a href="/" >Fundraiser</a>
              <a href="/" >Career</a>
              <a href="/" >Blog</a>
            </div>
          </div>

          <div className="bottom-footer">
            <div className="miscellaneous">
              <h2>Miscellaneous</h2>
              <a href="/">Merchandise</a>
              <a href="/">Events</a>
              <a href="/">Blog</a>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <h3 className='h3'>Privacy Notice</h3>
    </div>
  )
}

export default Footer
