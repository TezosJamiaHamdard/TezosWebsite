import { useEffect, useState } from "react";
import "./Membersteam.css";
import khalique from "../../assets/khalique2.jpg";

const TeamMember = ({ id, name, title, bio, avatar }) => (
  <>
    <input type="radio" id={id} name="member" />
    <div className="card-mem">
      <img
        src={avatar}
        className="avatar"
        style={{
          width: "100%",
          height: "auto",
          // minHeight: "5rem",
          minWidth: "5rem",
          objectFit: "cover",
        }}
      />
      <div className="info-member">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
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
        },
        {
          id: "m2",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m3",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m4",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m5",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m6",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m7",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m8",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m9",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
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
        },
        {
          id: "m11",
          name: "Alice Brown",
          title: "Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m12",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m13",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m14",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m15",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
      ],
    },
    3: {
      title: "BOARD TEAM",
      members: [
        {
          id: "m16",
          name: "Tom Williams",
          title: "Board Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m17",
          name: "Emma Davis",
          title: "Board Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m18",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m19",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
      ],
    },
    4: {
      title: "FOUNDING MEMBERS",
      members: [
        {
          id: "m20",
          name: "Robert Miller",
          title: "Founding Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m21",
          name: "Olivia Wilson",
          title: "Founding Member",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m22",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
      ],
    },
    5: {
      title: "PHOTOGRAPHY TEAM",
      members: [
        {
          id: "m23",
          name: "David Lee",
          title: "Photographer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m24",
          name: "Sophia Taylor",
          title: "Photographer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m25",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m26",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
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
        },
        {
          id: "m28",
          name: "Emily Martinez",
          title: "Content Creator",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m29",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m30",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m31",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
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
        },
        {
          id: "m33",
          name: "Ava Garcia",
          title: "Manager",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m34",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m35",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m36",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
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
        },
        {
          id: "m38",
          name: "Sofia Hernandez",
          title: "Designer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m39",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m40",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: "m41",
          name: "Jane Smith",
          title: "Developer",
          bio: "User Bio Goes Here",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
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
