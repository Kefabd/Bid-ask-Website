import React, { useEffect, useState, useRef } from "react";
import background from '../dependecies/images/antique-1.jpg';
import { useLocation } from "react-router-dom";

export default function Authenticate() {
    const [activeTab, setActiveTab] = useState("signup");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [isVendor, setIsVendor] = useState(false);
    const location = useLocation();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const handleInputChange = (input) => {

        const label = input.target.previousElementSibling;


        if (input.target.value === "") {
            label.classList.remove("active", "highlight");
        } else {
            label.classList.add("active", "highlight");
        }
        console.log(input.target.value === "");
        console.log(label);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const user = { isVendor,email, firstName, lastName,pwd };
        console.log(user);
        fetch("http://localhost:8080/utilisateurs/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            console.log("New user added");
        })
    }


    useEffect(() => {
        // Check if the current route is "/authenticate"

        if (location.pathname === "/authenticate") {
            // Change the body background color here
            document.body.setAttribute("makeBack", "yes");
        } else {
            // Reset the body background color for other routes
            document.body.removeAttribute("makeBack");
        }
    }, [location.pathname]);


    return (
        <>
            <div className="authenticate">
                <div className="form">
                    <ul className="tab-group">
                        <li className={`tab ${activeTab === "signup" ? "active" : ""}`}>
                            <a href="#signup" onClick={() => handleTabClick("signup")}>
                                Sign Up
                            </a>
                        </li>
                        <li className={`tab ${activeTab === "login" ? "active" : ""}`}>
                            <a href="#login" onClick={() => handleTabClick("login")}>
                                Log In
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="signup" style={{ display: activeTab === "signup" ? "block" : "none" }}>
                            <h1>Sign Up for Free</h1>

                            <form action="/" method="post">
                                <div className="top-row">
                                    <div className="field-wrap">
                                        <label htmlFor="cc">
                                            First Name<span className="req">*</span>
                                        </label>
                                        <input type="text" required autoComplete="off" onChange={(e) => {
                                            setFirstName(e.target.value);
                                            handleInputChange(e);
                                        }}/>
                                    </div>

                                    <div className="field-wrap">
                                        <label>
                                            Last Name<span className="req">*</span>
                                        </label>
                                        <input type="text" required autoComplete="off" onChange={(e) => {
                                            setLastName(e.target.value);
                                            handleInputChange(e);
                                        }}/>
                                    </div>
                                </div>

                                <div className="field-wrap">
                                    <label>
                                        Email Address<span className="req">*</span>
                                    </label>
                                    <input type="email" required autoComplete="off" onChange={(e) => {
                                            setEmail(e.target.value);
                                            handleInputChange(e);
                                        }}/>
                                </div>

                                <div className="field-wrap">
                                    <label>
                                        Set A Password<span className="req">*</span>
                                    </label>
                                    <input type="password" required autoComplete="off" onChange={(e) => {
                                            setPwd(e.target.value);
                                            handleInputChange(e);
                                        }}/>
                                </div>

                                <div className="field-wrap">
                                    <label>Vendeur / Acheteur</label>
                                    <select name="cars" className="select" defaultValue="" required onChange={(e) => {
                                           if (e.target.value === "vendeur") {
                                            setIsVendor(true);
                                           } else 
                                                setIsVendor(false);
                                            handleInputChange(e);
                                        }}>
                                        <option value="" disabled hidden></option>
                                        <option value="vendeur">Vendeur</option>
                                        <option value="acheteur">Acheteur</option>
                                    </select>
                                </div>

                                <button type="submit" className="button button-block" onClick={handleClick}>
                                    Get Started
                                </button>
                            </form>
                        </div>

                        <div id="login" style={{ display: activeTab === "login" ? "block" : "none" }}>
                            <h1>Welcome Back!</h1>

                            <form action="/" method="post">
                                <div className="field-wrap">
                                    <label>
                                        Email Address<span className="req">*</span>
                                    </label>
                                    <input type="email" required autoComplete="off" onChange={(e) => handleInputChange(e)} />
                                </div>

                                <div className="field-wrap">
                                    <label>
                                        Password<span className="req">*</span>
                                    </label>
                                    <input type="password" required autoComplete="off" onChange={(e) => handleInputChange(e)} />
                                </div>

                                <p className="forgot">
                                    <a href="#">Forgot Password?</a>
                                </p>

                                <button className="button button-block">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
