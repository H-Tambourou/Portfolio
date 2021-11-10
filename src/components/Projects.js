import React from "react";
import {projects} from "../data.js";


function Projects(){
    return(
        <section id="projects" style={{width:"100%", height:"100%", position:"relative", paddingTop:"65px"}}>
            <div className="projectWrapper" style={{minHeight:"100vh"}} >
                <h1 style={{width:"100%", textAlign:"center", fontSize:"calc(2.5em + 1vh)"}}>Projects</h1>
                <div className="cards">
                    {projects.map((project, index) => {
                        return(
                            <div className="card" key={index}>
                                <img src={project.image} alt=""/>
                                <h1>{project.title}</h1>
                                <hr style={{width:"50px", height:"3px", margin:"20px auto", border:"0", backgroundColor:"crimson"}}/>
                                <div className="projectDesc">
                                    <p>{project.description}</p>
                                </div>
                                <div className="features">
                                    {project.tags.map((t, i) => {
                                        return <p key={i}>{t}</p>
                                    })} 
                                </div>
                                <div className="projectLinks" style={{listStyle:"none", padding:"0", display:"flex", justifyContent:"space-around", margin:"2.5rem 0"}}>
                                    <a className="projectLink" href={project.source} style={{color:"white", textDecoration:"none", fontSize:"1.2rem", borderRadius:"15px", padding:".5rem 1.5rem", backgroundColor:"#3a383840", cursor:"pointer" }}>Code</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Projects;