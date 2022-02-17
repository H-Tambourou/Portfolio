import React, {useState} from "react";
import { Link } from "react-scroll";

function Nav(){
    
    const linkNav = {
        padding:"1rem",
        cursor:"pointer"
    };

    const [currentState, setMenuState] = useState(false);


    return(
        <div className={`navBar ${currentState ? "toggleActive": ""}`} style={{position:"sticky", top:"0", width:"100%", zIndex:"7"}}>
            <div className="navContent" style={{display:"flex",justifyContent:"space-between", textTransform:"uppercase", alignItems:"center"}}>
                <div style= {{padding:"1rem", fontSize:"1.5rem"}} className="navText">Henrick</div>
                <div className={`menu ${currentState ? "toggleActive": ""}`} onClick={ () => {setMenuState(!currentState)}} style={{padding:"1rem"}}>
                    <li className="line"></li>
                    <li className="line"></li>
                    <li className="line"></li>
                </div>
                <ul className={`navLinks ${currentState ? "toggleActive": ""}`} >
                    <Link to="about" smooth={true} spy={true} style= {linkNav} onClick={ () => {setMenuState(!currentState)}}>about</Link>
                    <Link to="projects" smooth={true} spy={true} style= {linkNav} onClick={ () => {setMenuState(!currentState)}}>projects</Link>
                    <Link to="contact" smooth={true} spy={true} style= {linkNav} onClick={ () => {setMenuState(!currentState)}}>contact</Link>
                </ul>
            </div>
        </div>
    )
}
export default Nav;