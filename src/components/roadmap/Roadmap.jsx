import React from 'react'
import "./Roadmap.css"
import roadmap1 from "../../assets/roadmap1.jpg"
import roadmap2 from "../../assets/roadmap2.jpeg"
import roadmap3 from "../../assets/roadmap3.jpg"
import roadmap4 from "../../assets/roadmap4.jpg"
import roadmap5 from "../../assets/roadmap5.jpg"
import roadmap6 from "../../assets/roadmap6.jpg"

export default function Roadmap() {
    return (
        <div className="roadmaps">
            <div className="roadmap-img">
                <div className="roadmap-title">
                    <q className="roadmap-quote">Roadmaps to Follow</q>
                    <h3> Let's take dive into Tech</h3>
                </div>
            </div>

            <div className="container-roadmap swiper">
                <div className="slider-wrapper">
                    <div className="card-list swiper-wrapper">
                        <div className="card-item swiper-slide">
                            <img
                                // decoding="async"
                                src={roadmap1}
                                alt="user"
                                className="user-image"
                            />
                            <h2 className="user-name">Full Stack Development</h2>
                            <p className="user-profession"> Full stack development is the practice of being proficient in both the front-end and back-end aspects of web application development. A full stack developer is capable of working on all layers of a software application, from the user interface and user experience (front-end) to the server, database, and server-side logic (back-end). 
                            </p>
                            <button className="message-button"><a href="https://roadmap.sh/full-stack"> Complete Roadmap </a></button>
                        </div>
                        <div className="card-item swiper-slide">
                            <img
                                // decoding="async"
                                src={roadmap2}
                                alt="roadmap 2"
                                className="user-image"
                            />
                            <h2 className="user-name">DevOps</h2>
                            <p className="user-profession">DevOps is a cultural and collaborative mindset that emphasizes communication, collaboration, integration, and automation between development and operations teams in order to achieve faster and more reliable software delivery.

DevOps is not a specific job title or role, but rather a set of practices and principles that can be applied across a variety of roles in software development and IT operations.</p>
                            <button className="message-button"><a href="https://roadmap.sh/devops"> Read More </a></button>
                        </div>
                        <div className="card-item swiper-slide">
                            <img
                                decoding="async"
                                src={roadmap3}
                                alt="roadmap 3"
                                className="user-image"
                            />
                            <h2 className="user-name">Block-Chain Developer</h2>
                            <p className="user-profession">Blockchain development involves creating decentralized applications (dApps) and smart contracts that run on blockchain networks. It ensures data transparency, security, and immutability across various industries. Developers use platforms like Ethereum, Hyperledger, and Solidity to build and deploy blockchain solutions that can revolutionize finance and more by eliminating intermediaries and enhancing trust.</p>
                            <button className="message-button"><a href="https://roadmap.sh/blockchain"> Read More </a></button>
                        </div>
                        <div className="card-item swiper-slide">
                            <img
                                decoding="async"
                                src={roadmap4}
                                alt="4"
                                className="user-image"
                            />
                            <h2 className="user-name">Cyber security Expert</h2>
                            <p className="user-profession">Software Developer</p>
                            <button className="message-button"><a href="https://roadmap.sh/cyber-security"> Read More </a></button>
                        </div>
                        <div className="card-item swiper-slide">
                            <img
                                decoding="async"
                                src={roadmap5}
                                alt="Userr"
                                className="user-image"
                            />
                            <h2 className="user-name">Front End Developer</h2>
                            <p className="user-profession">SEO Scientist</p>
                            <button className="message-button"><a href="https://roadmap.sh/frontend?r=frontend-beginner"> Read More </a></button>
                        </div>
                        <div className="card-item swiper-slide">
                            <img
                                decoding="async"
                                src={roadmap6}
                                alt="roadmap5"
                                className="user-image"
                            />
                            <h2 className="user-name">Backend Developer</h2>
                            <p className="user-profession">Digital Marketer</p>
                            <button className="message-button"><a href="https://roadmap.sh/backend?r=backend-beginner"> Read More </a></button>

                        </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="swiper-slide-button swiper-button-prev" />
                    <div className="swiper-slide-button swiper-button-next" />
                </div>
            </div>
        </div>
    )
};
