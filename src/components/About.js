import React from "react";
import img1 from "../assets/HT_B&W.png";
function About() {
   
    return(
        <div id="about" >
            <div className="col homeLeft">
                <span className="hStyle" >Hello,</span><br/>
                <p className="pStyle"> my name is Henrick Tambourou.<br/>I am a front end developper,<br/>and a philomath<br/>-based in houston. </p>
                <ul className="quickLinks" style={{listStyle:"none", display:"flex", flexFlow:"row", padding:"5px"}}>
                    <li style={{border:"4px solid #d7d7d7", padding:"5px", margin:"5px"}}>LinkedIn</li>
                    <li style={{border:"4px solid #d7d7d7", padding:"5px", margin:"5px"}}>Github</li>
                 </ul>
            </div>
           <div className="col homeRight">
           <img className="homeImg" src={img1} alt="..." style={{width:"500px"}}/>
            </div> 
        </div>
    )
}
export default About;
