// import React from 'react'
import "./Blog.css"
import Blog1 from "../../assets/Blog1.avif"
import Blog2 from "../../assets/Blog2.avif"



export default function Blog() {
  return (
    <div className="blogs">
      <div className="blog-img">
        <div className="blog-title">
          <q className="blog-quote">Read Our Blogs</q>
          <h3> Explore The Activities We Are Doing </h3>
        </div>
      </div>

      <div className="container-blog swiper">
        <div className="slider-wrapper">
          <div className="card-list swiper-wrapper">
            <div className="card-item swiper-slide">
              <img
                // decoding="async"
                src={Blog1}
                alt="user"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmed</h2>
              <p className="user-profession">Deploying your Application on Azure Kubernetes ServiceAzure Kubernetes Service (AKS) is a managed Kubernetes service provided by Microsoft. It allows you to deploy and manage containerized applications without the
              </p>
              <button className="message-button"><a href="https://tauqeerahmad.hashnode.dev/deploying-your-application-on-azure-kubernetes-service"> Read More </a></button>
            </div>
            <div className="card-item swiper-slide">
              <img
                // decoding="async"
                src={Blog2}
                alt="Blog 2"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmed</h2>
              <p className="user-profession">Welcome to the world of Azure Command-Line Interface (CLI)! As cloud computing continues to revolutionize the way we build, deploy, and manage applications, having a powerful and efficient tool like the Azure CLI in your toolkit is essential.</p>
              <button className="message-button"><a href="https://tauqeerahmad.hashnode.dev/navigating-the-microsoft-azure-cli"> Read More </a></button>
            </div>
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                // src="images/Jaw-Long.png"
                alt="Blog 3"
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
                alt="4"
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
                alt="Userr"
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
                alt="blog5"
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