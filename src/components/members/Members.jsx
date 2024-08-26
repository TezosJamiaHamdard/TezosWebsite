import React, { useEffect, useState } from 'react'
import './Members.css'


function Members() {

  useEffect(() => {
    function initializeEventListeners() {
      const tiles = document.querySelectorAll(".wrapper .members .tile");

      tiles?.forEach((tile) => {
        tile.addEventListener("click", () => {
          tiles.forEach((tile) => {
            tile.classList.remove("active");
          })
          tile.classList.add("active");
        });
      });

    }

    function initialize() {
      initializeEventListeners();
    }

    // Start it up
    initialize();




  })
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  }

  return (
    <>
      <div className="buttons button-team">
        <button className={showtab === 1 ? "btn-container actives" : "btn-container"} onClick={() => handletab(1)} >
          Social Media Team
        </button>
        <button className={showtab === 2 ? "btn-container actives" : "btn-container"} onClick={() => handletab(2)} >
          Tech Team
        </button>
        <button className={showtab === 3 ? "btn-container actives" : "btn-container"} onClick={() => handletab(3)}>
          PR Team
        </button>
        <button className={showtab === 4 ? "btn-container actives" : "btn-container"} onClick={() => handletab(4)}>
          Board Members
        </button>
        <button className={showtab === 5 ? "btn-container actives" : "btn-container"} onClick={() => handletab(5)}>
          Founding Members
        </button>
        <button className={showtab === 6 ? "btn-container actives" : "btn-container"} onClick={() => handletab(6)}>
          Photography Team
        </button>
        <button className={showtab === 7 ? "btn-container actives" : "btn-container"} onClick={() => handletab(7)}>
          Content Team
        </button>
        <button className={showtab === 8 ? "btn-container actives" : "btn-container"} onClick={() => handletab(8)}>
          Management Team
        </button>
        <button className={showtab === 9 ? "btn-container actives" : "btn-container"} onClick={() => handletab(9)}>
          Desinging Team
        </button>
      </div>



      <div className='team-members-div'>
        <div className={showtab === 1 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">CORE TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* second */}
      <div className='team-members-div'> 
        <div className={showtab === 2 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className='cards'>
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* third */}
      <div className='team-members-div'>
        <div className={showtab === 3 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">PR TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* four */}
      <div className='team-members-div'>
        <div className={showtab === 4 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">Board TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* five */}
      <div className='team-members-div'>
        <div className={showtab === 5 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">FOUNDING MEMBERS</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Six */}
      <div className='team-members-div'>
        <div className={showtab === 6 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">Photography TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seven */}
      <div className='team-members-div'>
        <div className={showtab === 7 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">CONTENT TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Eight */}
      <div className='team-members-div'>
        <div className={showtab === 8 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">MANAGEMENT TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nine*/}
      <div className='team-members-div'>
        <div className={showtab === 9 ? "wrapper active-members" : "wrapper"} >
          {/* CTA Wrapper */}
          <div className="intro-wrapper">
            <div className="team-title">DESIGNING TEAM</div>
          </div>
          {/* Team Wrapper */}
          <div className="team-wrapper">
            <div className="members">
              <label htmlFor="m1" className="tile active">
                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=105&auto=format&fit=crop" />
              </label>
              <label htmlFor="m2" className="tile">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m3" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m4" className="tile">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m5" className="tile">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop" />
              </label>
              <label htmlFor="m6" className="tile">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m7" className="tile">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m8" className="tile">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m9" className="tile">
                <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=100&auto=format&fit=crop" />
              </label>
              <label htmlFor="m10" className="tile">
                <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=100&auto=format&fit=crop" />
              </label>
            </div>
            <div className="divider" />
            <div className="cards">
              <div className="card-wrapper">
                <input type="radio" id="m1" name="members" defaultChecked="" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its dedication to making a
                        positive impact on the world. John is also an active mentor and
                        advocate for young entrepreneurs and environmental
                        sustainability, reflecting his belief in giving back to the
                        community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m2" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Alicia Williams</div>
                    <div className="title">Chief Technology Officer</div>
                    <div className="bio">
                      <p>
                        Alicia Williams is the dynamic Chief Technology Officer (CTO) of
                        EcoTech Innovations, where she spearheads the development of
                        technology solutions in the realm of sustainable energy. With
                        over 12 years of experience in software engineering, Alicia
                        plays a crucial role in driving the company's technical vision
                        and innovation strategies.
                      </p>
                      <p>
                        Alicia holds a Master's degree in Computer Science from the
                        Redwood Institute of Technology. Her exceptional skills and
                        forward-thinking approach have earned her several industry
                        accolades, including the Tech Pioneer Award and the Women in
                        Technology Leadership Award. Alicia's commitment to
                        technological excellence has been instrumental in EcoTech
                        Innovations.
                      </p>
                      <p>
                        Under Alicia's leadership, the tech team at EcoTech Innovations
                        has made significant advancements in smart grid technology. She
                        is also a fervent advocate for diversity in tech and actively
                        mentors aspiring female engineers, believing strongly in the
                        power of inclusivity and innovation to drive the future of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m3" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Justin Laketimber</div>
                    <div className="title">Chief Operating Officer</div>
                    <div className="bio">
                      <p>
                        Justin Laketimber is the Chief Operating Officer (COO) of
                        EcoTech Innovations, bringing a wealth of experience in
                        operational management and strategic planning to the company.
                        With a career spanning over 18 years in the renewable energy
                        sector, Justin is dedicated to optimizing operations and
                        ensuring the seamless execution of EcoTech Innovations' mission
                        to provide sustainable energy solutions.
                      </p>
                      <p>
                        Justin earned his MBA from the renowned Silver Lake Business
                        School, where he specialized in operations management and
                        sustainable business practices. His strategic acumen and
                        operational expertise have earned him accolades such as the
                        Green Business Leader Award and the Operational Excellence
                        Medal.
                      </p>
                      <p>
                        At EcoTech Innovations, Justin oversees the daily operations and
                        drives initiatives to enhance efficiency, scalability, and
                        sustainability. His leadership has been pivotal in scaling the
                        company's operations globally, ensuring high standards of
                        performance and sustainability. Justin also regularly speaks at
                        industry conferences on the importance of operational excellence
                        in achieving environmental goals.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m4" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">George Potter</div>
                    <div className="title">Chief Financial Officer</div>
                    <div className="bio">
                      <p>
                        George Potter is the Chief Financial Officer (CFO) of EcoTech
                        Innovations, where he expertly manages the company's financial
                        strategy and operations. With over 20 years of experience in
                        corporate finance and strategic financial planning, George
                        ensures the fiscal health and growth of EcoTech Innovations.
                      </p>
                      <p>
                        George holds a Master's degree in Finance from Westbridge
                        University. His financial acumen and strategic insights have
                        earned him recognition, including the CFO Excellence Award and
                        the Financial Leadership Award. George's expertise in financial
                        management and sustainable investment has been instrumental in
                        guiding EcoTech Innovations through significant growth phases.
                      </p>
                      <p>
                        At EcoTech Innovations, George oversees financial planning,
                        budgeting, and risk management, ensuring the company’s resources
                        are effectively utilized to drive innovation and expansion. He
                        is also an advocate for responsible investment in renewable
                        energy and regularly contributes to industry panels and
                        discussions on sustainable finance.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m5" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Emily Greenfield</div>
                    <div className="title">Member</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m6" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Sophia Whitestone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m7" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Daniel Crestwood</div>
                    <div className="title">Co-Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m8" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Olivia Brookstone</div>
                    <div className="title">Engineer</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m9" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">Ethan Clearwater</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" id="m10" name="members" />
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop"
                    className="avatar"
                  />
                  <div className="info">
                    <div className="name">John Doe</div>
                    <div className="title">Founder</div>
                    <div className="bio">
                      <p>
                        John Doe is the visionary founder and CEO of EcoTech
                        Innovations, a trailblazing enterprise dedicated to sustainable
                        technology solutions. With over 15 years of experience in
                        environmental engineering, John has been at the forefront of
                        innovation, driving the company's mission to revolutionize
                        renewable energy sources.
                      </p>
                      <p>
                        A graduate of Greenfield University with a degree in
                        Environmental Engineering, John's expertise and leadership have
                        garnered numerous accolades, including the Green Innovator Award
                        and the Eco Excellence Recognition. His commitment to excellence
                        and passion for sustainable development have made EcoTech
                        Innovations a leader in the renewable energy market.
                      </p>
                      <p>
                        Under John's guidance, the company has grown from a startup to
                        an industry leader, known for its cutting-edge technology and
                        dedication to making a positive impact on the world. John is
                        also an active mentor and advocate for young entrepreneurs and
                        environmental sustainability, reflecting his belief in giving
                        back to the community and fostering future innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






    </>
  )
}

export default Members
