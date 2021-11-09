import React from "react";
import img1 from "../assets/HT_B&W.png";
import resume from "../assets/Resume.pdf";

function About() {
   
    return(
        <section id="about" style={{width:"100%", height:"100vh", position:"relative", paddingTop:"65px"}}>
            <div className="aboutWrapper" style={{width:"100%", height:"100%"}}>
            <div className="aboutCol">
                <h1 className="hStyle" >Hello,</h1>
                <p className="pStyle"> my name is Henrick Tambourou.<br/>I am a front-end developper <br/>and philomath<br/>-based in houston. </p>
                <ul className="quickLinks" style={{listStyle:"none", display:"flex", flexFlow:"row", padding:"5px", flexWrap:"wrap"}}>
                    <li style={{border:"2px solid #d7d7d7", padding:"5px", margin:"5px"}}><a target="blank" style={{textDecoration:"none", color:"inherit"}} href="https://www.linkedin.com/in/henrick-t-429a1b223/">LinkedIn</a></li>
                    <li style={{border:"2px solid #d7d7d7", padding:"5px", margin:"5px"}}><a target="blank" style={{textDecoration:"none", color:"inherit"}} href="https://github.com/H-Tambourou">GitHub</a></li>
                    <li style={{border:"2px solid #d7d7d7", padding:"5px", margin:"5px"}}><a target="blank" style={{textDecoration:"none", color:"inherit"}} href="https://mobile.twitter.com/future_x_robert/">Twitter</a></li>
                    <li style={{border:"2px solid #d7d7d7", padding:"5px", margin:"5px"}}><a style={{textDecoration:"none", color:"inherit"}} href={resume} download="HT_Resume">Resume</a></li>
 
                 </ul>
            </div>
            <div className="aboutCol" >
                <img className="homeImg" src={img1} alt="..." style={{width:"90%", height:"100%", objectFit:"contain"}}/>
            </div> 
            <span className="leftBottom" style={{position:"absolute", bottom:"8px", left:"16px"}}>01</span>
            </div>
        </section>
    )
}
export default About;
