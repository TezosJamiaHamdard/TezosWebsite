import React from "react";
import "./About.css";
import Img from "../../assets/about-bg.jpg";
import Aboutimg from "../../assets/TezosCommunity.webp";
import Article1 from "../../assets/article1.jpeg";
import Article2 from "../../assets/article2.jpeg";
import Article3 from "../../assets/article3.jpeg";
import Article4 from "../../assets/article4.jpg";
import Article5 from "../../assets/article5.jpg";
import Article7 from "../../assets/article7.jpg";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="about-details">
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", opacity: "0.4", left: "0", top: "10" }}>
            <path fill="#8E05C2" d="M60.8,-51.2C72,-34.5,69.6,-9.6,63.6,13.7C57.6,36.9,48.1,58.4,31.3,67.6C14.4,76.7,-9.6,73.4,-29.6,63.1C-49.5,52.9,-65.2,35.7,-69.8,15.8C-74.5,-4,-68,-26.5,-54.5,-43.7C-41,-60.9,-20.5,-72.9,2.2,-74.6C24.8,-76.3,49.6,-67.8,60.8,-51.2Z" transform="translate(100 100)" />
          </svg> */}
          <h2 className="tezos-1">What Is Tezos?</h2>
          <div className="about-background">
            <p className="about-text">
              {" "}
              Welcome to The Tezos Community, a platform where like-minded
              individuals come together to share ideas, learn and grow together.
              We are a community of developers, designers, artists, and
              enthusiasts who share a common interest in the Tezos ecosystem. We
              believe in the power of collaboration and the importance of
              community in building a better future for all. Our mission is to
              create a platform where people can come together, share their
              ideas and projects, and support one another in their journey. We
              aim to provide a safe and inclusive environment for all members of
              our community, regardless of their background or level of
              experience. We believe that everyone has something valuable to
              offer, and we strive to create an environment where everyone feels
              welcome and valued. If you share our vision and want to be a part
              of our community, please join us and let's build a better future
              together.
            </p>
            <div className="sec1-about">
              <img src={Img} alt="About Us" className="sec1-about-image" />
            </div>
          </div>
          <div className="about-section2">
            <h2 className="tezos-2">Talking About Tezos!</h2>
            <div className="about-sec2">
              <div>
                <h3 className="sec2-subtitle">Meet Tezos</h3>
                <p className="sec2-text">
                  We envision a future where everyone has the opportunity to
                  reach their full potential, regardless of their background or
                  circumstances. We believe that by working together, we can
                  create a better world for all. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Libero sunt blanditiis quae
                  quisquam. Facere saepe perferendis tenetur assumenda veniam
                  cumque repellendus? Sapiente, perferendis earum impedit vitae
                  aperiam unde eveniet et rerum repellat tempora ex quas dolorem
                  officia quos iure eaque?
                </p>
              </div>
              <div>
                <h3 className="sec2-subtitle">Did You Know</h3>
                <p className="sec2-text">
                  We envision a future where everyone has the opportunity to
                  reach their full potential, regardless of their background or
                  circumstances. We believe that by working together, we can
                  create a better world for all. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Tempore repellendus nesciunt
                  provident dolorum! Expedita odio placeat suscipit cumque
                  possimus inventore neque optio doloremque labore, quia minima
                  modi reiciendis sit ullam iure, laborum iste pariatur
                  reprehenderit minus sapiente assumenda quas vitae?
                </p>
              </div>
            </div>

            <div className="sec-about-img">
              <div className="sec2-img">
                <img src={Aboutimg} alt="About Us" className="sec2-about-img" />
              </div>
              <div className="sec2-img-text">
                <p className="sec2-text">
                  <ul>
                    <h3 className="sec2-subtitle-com">The Tezos Community</h3>
                    <li>
                      Meet like-minded individuals who share a common interest
                      in the Tezos ecosystem.
                    </li>
                    <li>
                      Connect with like-minded individuals who share a common
                      interest in the Tezos ecosystem.
                    </li>
                    <li>Learn, share, and build together.</li>
                    <li>
                      Share our vision and want to be a part of our community.
                    </li>
                    <li>Join us and let's build a better future together.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* <h2 className="about-subtitle">Our Mission</h2>
            <p className="sec-text">
              Our mission is to create a platform where people can come together, share their ideas and projects, and support one another in their journey. We aim to provide a safe and inclusive environment for all members of our community, regardless of their background or level of experience.
            </p> */}
          </div>
        </div>
      </div>
      <h1 className="header-about">
        <h1>Articles</h1>
      </h1>
      <div className="band">
        <div className="item-1">
          <a
            href="https://youtu.be/vPiYHs4zNvw?si=Mr7KK90luv8S2FpH"
            className="card"
          >
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${Article1})`,
              }}
            />
            <article>
              <h1>Tezos & NFTs: Star to Stardom</h1>
              <span>Tezos Jamia Hamdard</span>
            </article>
          </a>
        </div>
        <div className="item-2">
          <a
            href="https://youtu.be/xcKs4J3sBlU?si=GbseeWLXLWmi6HHf"
            className="card"
          >
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${Article2})`,
              }}
            />
            <article>
              <h1>Workshop by Xiaohui Liu on Bitcoin</h1>
              <span>Watch Video</span>
            </article>
          </a>
        </div>
        <div className="item-3">
          <a href="https://tezos.com" className="card">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${Article3})`,
              }}
            />
            <article>
              <h1> Blockchain and Tezos</h1>
              <p> Learn about Blockchain. </p>
              <span>Tezos</span>
            </article>
          </a>
        </div>
        <div className="item-4">
          <a href="https://tezos.com" className="card">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${Article4})`,
              }}
            />
            <article>
              <h1>Tezos </h1>
              <p>Tezos official website. </p>
              <span>Tezos</span>
            </article>
          </a>
        </div>
        <div className="item-5">
          <a
            href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
            className="card"
          >
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${Article5})`,
              }}
            />
            <article>
              <h1>Tezos Jamia Hamdard Offical Website.</h1>
              <span>Tezos JHU</span>
            </article>
          </a>
        </div>
        <div className="item-6">
          <a
            href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
            className="card"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg)",
              }}
            />
            <article>
              <h1>
                5 Inspirational Business Portraits and How to Make Your Own
              </h1>
              <span>Marie Gardiner</span>
            </article>
          </a>
        </div>
        <div className="item-7">
          <a
            href="https://chat.whatsapp.com/H9aWrPegFYNEzesrkfMksM"
            className="card"
          >
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${Article7})`,
              }}
            />
            <article>
              <h1>
                Join our Tezos Community and dive into Technology with us.
              </h1>
              <span>Join Now!</span>
            </article>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
