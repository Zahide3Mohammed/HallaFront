import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../Elementes/LanguageContext";
import { translationsLayout } from "../Elementes/translations/translationsLayout";

import "./Profile.Module.css"


export default function Profile(){
  //Analytical Thinking=A_T
  //Innovative Ideas=I_I
  //Social Influence=S_I
  //Adaptability=A
  const { user }=useAuth();
  const { language } = useLanguage();
    const t = translationsLayout[language]
  


  const sidebarLinks = [
     { name:`${t.name_purple}`,color: "purple", image: "./images/purple-back.jpg" ,text:`${t.text_purple}` ,A_T: "80%", I_I: "90%", S_I: "50%", A: "70%"},
    { name:`${t.name_green}`,color: "green", image: "./images/green-back.jpg",text:`${t.text_green}`,A_T:"90%", I_I: "60%", S_I: "40%", A: "80%" },
    { name:`${t.name_yellow}`,color: "yellow", image: "./images/yellow-back.jpg",text:`${t.text_yellow}` ,A_T:"50%", I_I:"80%", S_I: "90%", A:"70%"  },
      { name:`${t.name_red}`,color:"red", image: "./images/red-back.jpg",text:`${t.text_red}`,A_T:"70%", I_I:"50%", S_I:"30%", A:"60%"  },
      { name:`${t.name_blue}`,color:"blue",image: "./images/blue-back.jpg",text:`${t.text_blue}`,A_T: "60%", I_I: "40%", S_I:"80%", A:"70%" }
 
];
    const ress=sidebarLinks.find((e)=>e.color===user.color);
  return (
      <div className="profile-page" >
      <div className="content2" >

        {/* LEFT MAIN */}
        <div className="main">
          {/* COVER */}
          <div className="cover">
            <img src={ress.image} />
            <div className="avatar">
            <img src={`http://localhost:8000/storage/${user?.photo}`}  />
           
              <div className="update">
                  <label htmlFor="photo" style={{backgroundColor:ress.color}}>+</label>
                  <input id="photo" name="photo" type="file" hidden onChange={(e) => setupPhoto(e.target.files[0])}/>
              </div>
            </div>
          
          </div>
          {/* USER INFO */}
          <div className="user-info">
            <h2>{user?.nom} {user?.prenom}</h2>
            <p> {t.present} : 
              <span style={{color:'black',backgroundColor:ress.color,padding:'5px 10px',borderRadius:"12px",fontWeight:'900',margin:"5px"}}>
               {ress.name}
              </span>
            </p>
              <p style={{margin:'20px'}}>{ress.text}</p>
          </div>
          {/* TABS */}
          <div className="tabs">
            <button className="active" >Posts</button>
            
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
  <h3>{t.title}</h3>

  <div className="metric">
    <span>{t.A_T}</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.A_T ,backgroundColor:ress.color}}></div>
    </div>
  </div>

  <div className="metric">
    <span>{t.I_I}</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.I_I ,backgroundColor:ress.color}}></div>
    </div>
  </div>

  <div className="metric">
    <span>{t.S_I}</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.S_I ,backgroundColor:ress.color}}></div>
    </div>
  </div>

  <div className="metric">
    <span>{t.A}</span>
    <div className="bar">
      <div className="fill" style={{ width: ress.A ,backgroundColor:ress.color}}></div>
    </div>
  </div>
  
</div>

      </div>
      
    </div>
  );
};