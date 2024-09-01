// import React from 'react'
import "./Blog.css";
import Blog1 from "../../assets/Blog1.avif";
import Blog2 from "../../assets/Blog2.avif";
import Blog3 from "../../assets/blog3.jpeg";
import Blog4 from "../../assets/blog4.avif";

export default function Blog({ Blogref }) {
  return (
    <div className="blogs" ref={Blogref}>
      <div className="blog-img">
        <div className="blog-title">
          <q className="blog-quote">Read Our Blogs</q>
          <h3> Explore The Activities We Are Doing </h3>
        </div>
      </div>

      <div className="container-blog swiper">
        <div className="slider-wrapper">
          <div className="card-list swiper-wrapper">
            {/* 1 */}

            <div className="card-item swiper-slide">
              <img
                decoding="async"
                src={Blog4}
                alt="4"
                className="user-image"
              />
              <h2 className="user-name">Hamza</h2>
              <p className="user-profession">
                In the ever-evolving IT landscape, you’ve likely come across the
                term “DevOps” — a concept that’s rapidly gaining traction among
                major tech companies. With its emphasis on streamlining
                operations and development, DevOps is shaping the future of IT
                practices. In this blog, I’ll dive into what DevOps means, and
                the key aspects we’ll explore include:-
              </p>
              <button className="message-button">
                <a href="https://hashnode.com/post/cm0i7yhxm000609jqcd6ee2ch">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>

            <div className="card-item swiper-slide">
              <img
                // decoding="async"
                src={Blog1}
                alt="user"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmed</h2>
              <p className="user-profession">
                Deploying your Application on Azure Kubernetes ServiceAzure
                Kubernetes Service (AKS) is a managed Kubernetes service
                provided by Microsoft. It allows you to deploy and manage
                containerized applications without the
              </p>
              <button className="message-button">
                <a href="https://tauqeerahmad.hashnode.dev/deploying-your-application-on-azure-kubernetes-service">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>

            {/* 3 */}
            <div className="card-item swiper-slide">
              <img
                decoding="async"
                src={Blog3}
                alt="Blog 3"
                className="user-image"
              />
              <h2 className="user-name">Khalique Hussain</h2>
              <p className="user-profession">
                Software development is a dynamic field that requires a deep
                understanding of technology, user needs, and market trends. By
                following best practices, adopting the right methodologies, and
                staying updated with emerging trends, developers can create
                high-quality software that meets the needs of businesses and
                users alike. Whether you're a beginner or an experienced
                developer, continuous learning and adaptation are key to success
                in the ever-evolving world of software development.
              </p>
              <button className="message-button">
                <a href="https://khaliquehussain.hashnode.dev/software-development">
                  {" "}
                  Read More{" "}
                </a>
              </button>
            </div>
            {/* 4 */}
            <div className="card-item swiper-slide">
              <img
                // decoding="async"
                src={Blog2}
                alt="Blog 2"
                className="user-image"
              />
              <h2 className="user-name">Tauqeer Ahmed</h2>
              <p className="user-profession">
                Welcome to the world of Azure Command-Line Interface (CLI)! As
                cloud computing continues to revolutionize the way we build,
                deploy, and manage applications, having a powerful and efficient
                tool like the Azure CLI in your toolkit is essential.
              </p>
              <button className="message-button">
                <a href="https://tauqeerahmad.hashnode.dev/navigating-the-microsoft-azure-cli">
                  {" "}
                  Read More{" "}
                </a>
              </button>
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
  );
}
