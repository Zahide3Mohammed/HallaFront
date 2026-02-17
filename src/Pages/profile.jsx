import { useAuth } from "../context/AuthContext";
import "./Profile.Module.css"


export default function Profile(){
  //Analytical Thinking=A_T
  //Innovative Ideas=I_I
  //Social Influence=S_I
  //Adaptability=A
  const { user }=useAuth();

  const sidebarLinks = [
     { name: "purple", image: "./images/purple-back.jpg" ,text:"I'm a blue personality; I love peace and order, I focus on details, I think carefully before making any decision, and I prefer honesty and quality" ,A_T:"60%",I_I:"40%",S_I:"80%",A:"30%" },
    { name: "green", image: "./images/green-back.jpg",text:"I'm a blue personality; I love peace and order, I focus on details, I think carefully before making any decision, and I prefer honesty and quality" ,A_T:"60%",I_I:"40%",S_I:"80%",A:"30%" },
    { name: "yellow", image: "./images/yellow-back.jpg",text:"I'm a blue personality; I love peace and order, I focus on details, I think carefully before making any decision, and I prefer honesty and quality" ,A_T:"60%",I_I:"40%",S_I:"80%",A:"30%"  },
      { name: "red", image: "./images/red-back.jpg",text:"I'm a blue personality; I love peace and order, I focus on details, I think carefully before making any decision, and I prefer honesty and quality" ,A_T:"60%",I_I:"40%",S_I:"80%",A:"30%"  },
        { name: "blue", image: "./images/blue-back.jpg",text:"I'm a blue personality; I love peace and order, I focus on details, I think carefully before making any decision, and I prefer honesty and quality" ,A_T:"60%",I_I:"40%",S_I:"80%",A:"30%" }
 
];
    const ress=sidebarLinks.find((e)=>e.name===user.color);
  return (
      <div className="profile-page" >
      <div className="content2" >

        {/* LEFT MAIN */}
        <div className="main">
          {/* COVER */}
          <div className="cover">
            <img src={ress.image} />
            <div className="avatar">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" />
              <div className="update">
                  <label htmlFor="photo" style={{backgroundColor:ress.name}}>+</label>
                  <input id="photo" name="photo" type="file" hidden onChange={(e) => setupPhoto(e.target.files[0])}/>
              </div>
            </div>
          </div>
          {/* USER INFO */}
          <div className="user-info">
            <h2>{user?.nom} {user?.prenom}</h2>
            <p> You are  : 
              <span style={{color:'black',backgroundColor:ress.name,padding:'5px 10px',borderRadius:"12px",fontWeight:'900',margin:"5px"}}>
               {ress.name}
              </span>
            </p>
              <p style={{margin:'20px'}}>{sidebarLinks[3].text}</p>
          </div>
          {/* TABS */}
          <div className="tabs">
            <button className="active" >Posts</button>
            <button>Community</button>
            <button>Courses</button>
          </div>

          {/* POSTS */}
          <div className="posts">
            <div className="post">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
              <h4>Long-awaited vacation</h4>
              <p>Today I'll tell you about my vacation...</p>
            </div>

            <div className="post">
              <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" />
              <h4>A new single 🔒</h4>
              <p>Premium content locked</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
       <div className="sidebar2">
  <h3>Task Metrics</h3>

  <div className="metric">
    <span>Analytical Thinking</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.A_T ,backgroundColor:ress.name}}></div>
    </div>
  </div>

  <div className="metric">
    <span>Innovative Ideas</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.I_I ,backgroundColor:ress.name}}></div>
    </div>
  </div>

  <div className="metric">
    <span>Social Influence</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.S_I ,backgroundColor:ress.name}}></div>
    </div>
  </div>

  <div className="metric">
    <span>Adaptability</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.A ,backgroundColor:ress.name}}></div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};