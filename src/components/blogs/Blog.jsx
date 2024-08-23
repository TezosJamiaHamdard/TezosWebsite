// import React from 'react'
import "./Blog.css"
import { useEffect } from 'react'


export default function Blog() {

  useEffect(() => {
    // const swiper = new Swiper('.slider-wrapper', {
    //   loop: true,
    //   grabCursor: true,
    //   spaceBetween: 30,
    
    //   // Pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true
    //   },
    
    //   // Navigation
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
    //   // Responsive
    //   breakpoints: {
    //     0: {
    //       slidesPerView: 1
    //     },
    //     768: {
    //       slidesPerView: 2
    //     },
    //     1024: {
    //       slidesPerView: 3
    //     }
    //   }
    // });
})
  return (
    <div className="blogs">
      <div className="container-blog swiper">
        <div className="slider-wrapper">
          <div className="card-list swiper-wrapper">
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/James Rodry.png"
                alt="User Image"
                className="user-image"
              />
              <h2 className="user-name">James Rodry</h2>
              <p className="user-profession">Web Developer</p>
              <button className="message-button">Read More</button>
            </div>
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/Hayley Phillips.png"
                alt="User Image"
                className="user-image"
              />
              <h2 className="user-name">Hayley Phillips</h2>
              <p className="user-profession">Graphic Designer</p>
              <button className="message-button">Read More</button>
            </div>
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/Jaw-Long.png"
                alt="User Image"
                className="user-image"
              />
              <h2 className="user-name">Jaw-Long</h2>
              <p className="user-profession">Hiring Manager</p>
              <button className="message-button">Read More</button>
            </div>
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/Michael Rasmussen.png"
                alt="User Image"
                className="user-image"
              />
              <h2 className="user-name">Michael Rasmussen</h2>
              <p className="user-profession">Software Developer</p>
              <button className="message-button">Read More</button>
            </div>
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/Shannon Howarth.png"
                alt="User Image"
                className="user-image"
              />
              <h2 className="user-name">Shannon Howarth</h2>
              <p className="user-profession">SEO Scientist</p>
              <button className="message-button">Read More</button>
            </div>
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/Warren Bailey.png"
                alt="User Image"
                className="user-image"
              />
              <h2 className="user-name">Warren Bailey</h2>
              <p className="user-profession">Digital Marketer</p>
              <button className="message-button">Read More</button>
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-slide-button swiper-button-prev" />
          <div className="swiper-slide-button swiper-button-next" />
        </div>
      </div>

    </div>
  )
}
;