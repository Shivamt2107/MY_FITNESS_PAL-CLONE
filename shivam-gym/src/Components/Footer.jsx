import React from "react";
import "./Footer.css"
import { Link, Navigate } from "react-router-dom";

const Footer = () => {

    return (
        <>

            <div className="FooterMainDiv">
          
            <div className="FooterNavbar">
                <Link to="/about"><h2>ABOUT</h2></Link>
                <Link to="/food"><h2>FOOD</h2></Link>
                <Link to="/exercise"><h2>EXERCISE</h2></Link>
                <Link><h2>APPS</h2></Link>
                <Link><h2>COMMUNITY</h2></Link>
                <Link><h2>BLOG</h2></Link>
                <Link><h2>PREMIUM</h2></Link>


            </div>

                <div className="FooterLinksDiv">
                    <Link to="/login"><p>Calorie Counter</p></Link>
                    <Link to="/login"><p>Blog</p></Link>
                    <Link to="/login"><p>Terms</p></Link>
                    <Link to="/login"><p>Privacy</p></Link>
                    <Link to="/login"><p>Contact Us</p></Link>
                    <Link to="/login"><p>API</p></Link>
                    <Link to="/login"><p>Jobs</p></Link>
                    <Link to="/login"><p>Feedback</p></Link>
                    <Link to="/login"><p>Community Guidelines</p></Link>
                    <Link to="/login"><p>Ad Choices</p></Link>
                    <Link to="/login"><p>Do Not Sell My Personal Information</p></Link>






                </div>

                <p className="FooterLinksDivPTag">© 2022 MyFitnessPal, Inc.</p>
            </div>


        </>
    )

}

export default Footer