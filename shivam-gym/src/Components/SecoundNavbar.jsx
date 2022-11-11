import React from "react"
import { Link } from "react-router-dom";
import "./SecoundNavbar.css"

const SecoundNavbar=()=>{

    return(
        <>

        <div className="SecoundNavbarDiv">
            <div></div>
            <Link><h2>ABOUT</h2></Link>
            <Link><h2>FOOD</h2></Link>
            <Link><h2>EXERCISE</h2></Link>
            <Link><h2>APPS</h2></Link>
            <Link><h2>COMMUNITY</h2></Link>
            <Link><h2>BLOGS</h2></Link>
            <Link><h2>PREMIUM</h2></Link>

        </div>
        
        </>
    )
}

export default SecoundNavbar;