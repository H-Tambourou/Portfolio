import React from "react";

function Welcome() {
    return(
        <div className="welcome" style={{position:"relative", display:"flex",justifyContent:"center", alignContent:"center", width:"100%", height:"100vh"}}>
            <h1> PORTFOLIO</h1>
            <div className="backgroundText" style={{width:"100%", position:"absolute"}}>
                <div className="font1"> WELCOME</div>
                <div className="font1Mobile">
                    <div>WEL</div>
                    <div>COME</div>
                </div>
            </div>

            <h2 style={{position:"absolute", bottom:"8px", left:"16px"}}>00</h2>
        </div>
    )
}
export default Welcome;