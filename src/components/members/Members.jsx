import { useEffect, useState } from "react";
import "./Membersteam.css";
import khalique from "../../assets/khalique2.jpg";
import hamza from "../../assets/hamza.jpg";

const TeamMember = ({ id, name, title, bio, avatar, social_links }) => (
  <>
    <input type="radio" id={id} name="member" />
    <div className="card-mem">
      <img
        src={avatar}
        className="avatar"
        style={{
          width: "100%",
          height: "400px",
          // minHeight: "5rem",
          // minWidth: "5rem",
          objectFit: "cover",
        }}
      />
      <div className="info-member">
        <div className="name">{name} </div>
        <div className="title">{title}</div>
        {social_links && (
          <div className="socialLinks" style={{ display: "flex" }}>
            {social_links.map((link, index) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="link-div"
                >
                  <img
                    title={`${link.name} Profile`}
                    src={`./${link.name.toLowerCase()}.png`}
                    // alt={link.name}
                    style={{
                      width: link.name === "LinkedIn" ? "100%" : "100%",
                      height: link.name === "LinkedIn" ? "100%" : "100%",
                      cursor: "pointer",
                      objectFit: "cover",
                      transform:
                        link.name === "LinkedIn" && "translate(-12%,-10%)",
                    }}
                    className="socialLink"
                  />
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="bio">{bio}</div>
      </div>
    </div>
  </>
);

const Team = ({ teamMembers, title }) => (
  <div className="team-members-div" style={{ display: "flex" }}>
    <div className="wrapper-members active-members" style={{ display: "flex" }}>
      <div className="intro-wrapper">
        <div className="team-title">{title}</div>
      </div>
      {/* issue starts from here */}
      <div className="team-wrapper" style={{ display: "flex" }}>
        <div className="members-name" style={{ display: "flex" }}>
          {teamMembers.map((member, index) => (
            <label
              htmlFor={member.id}
              className={index === 0 ? "tile active" : "tile"}
            >
              <img
                src={member.avatar}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </label>
          ))}
        </div>
        <div className="divider" />
        <div className="cards-member">
          <div
            className="card-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      {/* issue ends here */}
    </div>
  </div>
);

function Members() {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };

  useEffect(() => {
    const tiles = document.querySelectorAll(
      ".wrapper-members .members-name .tile"
    );

    tiles?.forEach((tile) => {
      tile.addEventListener("click", () => {
        tiles.forEach((tile) => {
          tile.classList.remove("active");
        });
        tile.classList.add("active");
      });
    });
  }, []);

  const teams = {
    1: {
      title: "TECH TEAM",
      members: [
        {
          id: "m1",
          name: "Khalique Hussain",
          title: "BCA 3rd YEAR",
          bio: "Hi, my name is Khalique Hussain. I’m currently in a BCA 3rd year at Jamia Hamdard University majoring in Computer Science. I’m also a member of the Tezos Tech team. I’m passionate about learning new technologies and collaborating with others.",
          avatar: khalique,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m2",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m3",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m4",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m5",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m6",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m7",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m8",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m9",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    2: {
      title: "SOCIAL MEDIA TEAM",
      members: [
        {
          id: "m10",
          name: "Bob Johnson",
          title: "Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m11",
          name: "Alice Brown",
          title: "Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m12",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m13",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m14",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m15",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    3: {
      title: "PHOTOGRAPHY TEAM",
      members: [
        {
          id: "m16",
          name: "Tom Williams",
          title: "Board Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m17",
          name: "Emma Davis",
          title: "Board Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m18",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m19",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    4: {
      title: "BOARD MEMBERS",
      members: [
        {
          id: "m20",
          name: "HAMZA",
          title: "BCA 3rd YEAR",
          bio: "I’m Hamza, currently pursuing a BCA degree from Jamia Hamdard, where I’m deeply involved in the tech community as the chairperson of Tezos JH. My passion for Web Development and DevOps drives me to engage with various societies, including Hacked JH and GDSC JH, where I collaborate with like-minded individuals to push the boundaries of what technology can achieve. My hands-on experience includes an internship with Delhi Police, where I applied my skills in Web Development and DevOps to real-world challenges, making a tangible impact. I’ve also had the opportunity to participate in and win multiple hackathons with my team, where we leveraged our expertise in Linux, C, C++, Java, SQL, and DSA to create innovative solutions. Beyond technical projects, I’m committed to sharing knowledge and building strong connections. Through my tech blogs and LinkedIn, I’ve established a network of professionals and enthusiasts who inspire and challenge me to keep learning and growing. Guiding students and staying on the cutting edge of technology are what keep me motivated. I’m always eager to take on new challenges, explore emerging technologies, and contribute to the ever-evolving tech landscape. Let’s connect and collaborate to shape the future of technology together!",
          avatar: hamza,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/ansari_hamza69?igsh=Y291d3ZtZDlyZHg==",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/hamza69?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
            {
              name: "X",
              link: "https://x.com/ansari_hamza69?t=cghrEi-V_xNfkkofTN2UIw&s=09",
            },
            {
              name: "Github",
              link: "https://github.com/ansarihamza69",
            },
          ],
        },
        {
          id: "m21",
          name: "Olivia Wilson",
          title: "Founding Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m22",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    5: {
      title: "FOUNDING MEMBERS",
      members: [
        {
          id: "m23",
          name: "Hamza ",
          title: "BCA 3rd YEAR",
          bio: "User Bio Goes Here",
          avatar: hamza,
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m24",
          name: "Sophia Taylor",
          title: "Photographer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m25",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m26",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    6: {
      title: "CONTENT TEAM",
      members: [
        {
          id: "m27",
          name: "James Anderson",
          title: "Content Creator",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m28",
          name: "Emily Martinez",
          title: "Content Creator",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m29",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m30",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m31",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    7: {
      title: "MANAGEMENT TEAM",
      members: [
        {
          id: "m32",
          name: "William Thompson",
          title: "Manager",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m33",
          name: "Ava Garcia",
          title: "Manager",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m34",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m35",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m36",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    8: {
      title: "DESIGNING TEAM",
      members: [
        {
          id: "m37",
          name: "Michael Robinson",
          title: "Designer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m38",
          name: "Sofia Hernandez",
          title: "Designer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m39",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m40",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m41",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
    9: {
      title: "PR TEAM",
      members: [
        {
          id: "m42",
          name: "Michael Robinson",
          title: "Designer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m43",
          name: "Sofia Hernandez",
          title: "Designer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m44",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m45",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
        {
          id: "m46",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
          social_links: [
            {
              name: "Instagram",
              link: "https://www.instagram.com/khaliqhussain_?igsh=emM0eWQ2OWlzZXhj&utm_source=qr",
            },
            {
              name: "LinkedIn",
              link: "http://linkedin.com/in/khaliquehussain7",
            },
            {
              name: "Gmail",
              link: "mailto:khaliquehussain7@gmail.com",
            },
            {
              name: "Whatsapp",
              link: "http://wa.me/+919711644284",
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      <div className="buttons button-team">
        {Object.keys(teams).map((key) => (
          <button
            key={key}
            className={
              showtab === Number(key)
                ? "btn-container actives"
                : "btn-container"
            }
            onClick={() => handletab(Number(key))}
          >
            {teams[key].title}
          </button>
        ))}
      </div>
      <Team teamMembers={teams[showtab].members} title={teams[showtab].title} />
    </>
  );
}

export default Members;
