import React from "react";
import { Link } from 'react-scroll';

function Welcome() {
    const welcomeStyle = {
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems: "center"
    }

    return(
        <section className="welcome" style={welcomeStyle}>
            <h1 style={{position:"absolute", textAlign:"center", top:"8px"}}> PORTFOLIO</h1>
            <div className="backgroundText" style={{width:"100%", position:"absolute"}}>
                <div className="font1"> WELCOME</div>
                <div className="font1Mobile">
                    <div style={{width:"100%"}}>WEL</div>
                    <div style={{width:"100%"}}>COME</div>
                </div>
            </div>
            <Link to="about" smooth={true} duration={500} spy={true} style={{position:"absolute", bottom:"0", padding:"1rem"}}>
                <div className="arrow" style={{margin:"auto"}}/>
            </Link>
            <span className="leftBottom" style={{position:"absolute", bottom:"8px", left:"16px"}}>00</span>
        </section>
    )
}
export default Welcome;