// import React from 'react'
import video from "../../assets/01.mp4";
import "./Page1.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";

export default function First() {
  useEffect(() => {
    const gone = document.querySelector("#main");

    // Create a function to change the styles of the navigation bar
    function updateNav() {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 10) {
        gone.style.opacity = "0";
      } else {
        gone.style.opacity = "1";
      }
    }

    // Add a scroll event listener to the window
    window.addEventListener("scroll", updateNav);
  });

  return (
    <div>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="back-video"
      >
        Your browser does not support the video tag.
      </video>
      <div className="featured-box" id="main">
        <div className="featured-text">
          <div className="first-section">
            <h1>
              Tezos<h3>Jamia Hamdard</h3>
            </h1>
          </div>
          <div className="social-icons">
            <div className="icon">
              <a href="https://github.com/tezosjh" className="btn-icon">
                <FaGithub style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/company/tezos-club-jamia-hamdard/"
                className="btn-icon"
              >
                <FaLinkedinIn
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://chat.whatsapp.com/H9aWrPegFYNEzesrkfMksM"
                className="btn-icon"
              >
                <FaWhatsapp style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://youtube.com/@tezosjh?si=NZ40ocBmoLjIoTN6"
                className="btn-icon"
              >
                <FaYoutube
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://x.com/Tezosclubjh?t=g_CSWx9n_vny9Id24Oizrw&s=09"
                className="btn-icon"
              >
                <FaXTwitter
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.instagram.com/tezosclub.jh?igsh=MXF5b3h2bDUweTlk"
                className="btn-icon"
              >
                <FaInstagram
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a href="https://discord.gg/DwMkR9mG2V" className="btn-icon">
                <FaDiscord
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="container-text">
          <div class="scroll">
            <div class="RightToLeft">
              <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSez2eFOWo1-tg3415GIub6zA4LhOSeAW35FSe4pbOaAJ7W6Ew/viewform"> Recruitment Forms Our Out, Join Us Now! Click Here! </a></p>
              <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSez2eFOWo1-tg3415GIub6zA4LhOSeAW35FSe4pbOaAJ7W6Ew/viewform"> Recruitment Forms Our Out, Join Us Now! Click Here! </a></p>
              <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSez2eFOWo1-tg3415GIub6zA4LhOSeAW35FSe4pbOaAJ7W6Ew/viewform"> Recruitment Forms Our Out, Join Us Now! Click Here! </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
