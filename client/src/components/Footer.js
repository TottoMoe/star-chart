import React from "react";
// import { FaCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"



const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    marginTop: "100vh",
    color: "white"
}


export default function Footer(){
    return(
        <div >
            <footer style={footerStyle}>
                <div>
                    <a href="https://github.com/TottoMoe/star-chart">
                        <FaGithub size={60} style={{color: "white"}}/>
                    </a>
                <p>Star Chart</p>
                </div>
            </footer>
        </div>
    )
}


