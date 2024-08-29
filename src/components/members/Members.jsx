import { useEffect, useState } from 'react';
import './Membersteam.css';

const TeamMember = ({ id, name, title, bio, avatar }) => (
  <>
    <input type="radio" id={id} name="members" />
    <div className="card">
      <img src={avatar} className="avatar"  style={{ width: '20rem', height: '20rem', minHeight: '5rem', minWidth: '5rem', objectFit: 'cover'  }}/>
      <div className="info">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
        <div className="bio">{bio}</div>
      </div>
    </div>
  </>
);

const Team = ({ teamMembers, title }) => (
  <div className="team-members-div">
    <div className="wrapper active-members">
      <div className="intro-wrapper">
        <div className="team-title">{title}</div>
      </div>
      <div className="team-wrapper">
        <div className="members">
          {teamMembers.map((member, index) => (
            <label htmlFor={member.id} key={index} className={index === 0 ? "tile active" : "tile"}>
              <img src={member.avatar} style={{ width: '10rem', height: '10rem', objectFit: 'cover'  }} />
              <p>askjdlask</p>
            </label>
          ))}
        </div>
        <div className="divider" />
        <div className="cards">
          <div className="card-wrapper">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function Members() {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };

  useEffect(() => {
    const tiles = document.querySelectorAll(".wrapper .members .tile");

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
      title: 'CORE TEAM',
      members: [
        { id: 'm1', name: 'John Doe', title: 'Founder', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop' },
        { id: 'm2', name: 'Jane Smith', title: 'Developer', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    2: {
      title: 'TEAM',
      members: [
        { id: 'm3', name: 'Bob Johnson', title: 'Member', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop' },
        { id: 'm4', name: 'Alice Brown', title: 'Member', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    3: {
      title: 'BOARD TEAM',
      members: [
        { id: 'm5', name: 'Tom Williams', title: 'Board Member', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
        { id: 'm6', name: 'Emma Davis', title: 'Board Member', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    4: {
      title: 'FOUNDING MEMBERS',
      members: [
        { id: 'm7', name: 'Robert Miller', title: 'Founding Member', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop' },
        { id: 'm8', name: 'Olivia Wilson', title: 'Founding Member', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    5: {
      title: 'PHOTOGRAPHY TEAM',
      members: [
        { id: 'm9', name: 'David Lee', title: 'Photographer', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop' },
        { id: 'm10', name: 'Sophia Taylor', title: 'Photographer', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    6: {
      title: 'CONTENT TEAM',
      members: [
        { id: 'm11', name: 'James Anderson', title: 'Content Creator', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
        { id: 'm12', name: 'Emily Martinez', title: 'Content Creator', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    7: {
      title: 'MANAGEMENT TEAM',
      members: [
        { id: 'm13', name: 'William Thompson', title: 'Manager', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop' },
        { id: 'm14', name: 'Ava Garcia', title: 'Manager', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
      ]
    },
    8: {
      title: 'DESIGNING TEAM',
      members: [
        { id: 'm15', name: 'Michael Robinson', title: 'Designer', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop' },
        { id: 'm16', name: 'Sofia Hernandez', title: 'Designer', bio: 'User Bio Goes Here', avatar: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop' },
      ]
    },
  };
  
  
  return (
    <>
      <div className="buttons button-team">
        {Object.keys(teams).map(key => (
          <button key={key} className={showtab === Number(key) ? "btn-container actives" : "btn-container"} onClick={() => handletab(Number(key))}>
            {teams[key].title}
          </button>
        ))}
      </div>
      <Team teamMembers={teams[showtab].members} title={teams[showtab].title} />
    </>
  );
}

export default Members;
