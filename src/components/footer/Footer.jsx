import React from 'react'
import './Footer.css'
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <div className='footer-div'>
      {/* --------------- FOOTER --------------- */}
      <footer className='footer_div'>
        <div className="top-footer">
          <p>TEZOS</p>
          <h2 style={{ color: "white" }}>FOLLOW US </h2>
          <div className="footer-social-icons">
            <div className="icon">
              <a className="btn-icon" >
                <FaInstagram style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
            <div className="icon">
              <a className="btn-icon">
                <FaGithub style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a className="btn-icon">
                <FaLinkedinIn style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
            <div className="icon">
              <a className="btn-icon">
                <FaReddit style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a className="btn-icon">
                <FaDiscord style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
            <div className="icon">
              <a className="btn-icon">
                <FaXTwitter style={{ color: "#fff", paddingTop: "4px" }} size={25} />
              </a>
            </div>
          </div>
          <h3 >Feedback or comments? Get in touch with us at reachout@tezos.com</h3>
          <h3 >For media inquiries please contact communications@tezos.foundation</h3>

        </div>
        <div className="middle-footer">
          <div className="general">
            <h2>General</h2>
            <a href="http://">Fundraiser</a>
            <a href="http://">Career</a>
            <a href="http://">Blog</a>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="miscellaneous">
            <h2>Miscellaneous</h2>
            <a href="http://">Merchandise</a>
            <a href="http://">Events</a>
            <a href="http://">Blog</a>
          </div>
        </div>
      </footer>
      <hr/>
    <h3 className='h3'>Privacy Notice</h3>
    </div>
  )
}

export default Footer
