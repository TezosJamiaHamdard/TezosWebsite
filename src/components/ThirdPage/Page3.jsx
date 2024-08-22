import React from 'react'
import './Page3.css'
import { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Page3() {
  useEffect(() => {
    const slider = document.querySelector('.slider');
    

    function activate(e) {
      const items = document.querySelectorAll('.item');
      e.target.matches('.next') && slider.append(items[0])
      e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener('click', activate, false);
  })
  return (
    <div className="PageThird">
      <main>
        <ul className="slider">
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg")'
            }}
          >
            <div className="content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
                voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
                ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{ backgroundImage: 'url("https://i.redd.it/tc0aqpv92pn21.jpg")' }}
          >
            <div className="content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
                voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
                ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://wharferj.files.wordpress.com/2015/11/bio_north.jpg")'
            }}
          >
            <div className="content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
                voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
                ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage: 'url("https://images7.alphacoders.com/878/878663.jpg")'
            }}
          >
            <div className="content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
                voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
                ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg")'
            }}
          >
            <div className="content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
                voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
                ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://da.se/app/uploads/2015/09/simon-december1994.jpg")'
            }}
          >
            <div className="content">
              <h2 className="title">"The Migration"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
                voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
                ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav_third">
          <FaArrowLeft className="btn next" size={60} style={{color:'white'}}/>

          <FaArrowRight className="btn prev" size={60} style={{color:'white'}}/>

          {/* <ion-icon className="btn prev" name="arrow-back-outline" />
          <ion-icon className="btn next" name="arrow-forward-outline" /> */}
        </nav>
      </main>

    </div>
  )
}

export default Page3
