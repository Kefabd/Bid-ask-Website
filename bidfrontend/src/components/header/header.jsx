import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    const [scrolling, setScrolling] = useState();
    const [showSign, setShowSign] = useState(false);
    const location = useLocation();
    console.log(location.pathname);

    useEffect(function () {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    })

    const handleSign = () => {
        setShowSign(true);
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
        <div>
            <nav className={`navbar navbar-expand-sm p-3 ${scrolling ? 'bg-change' : ''}`}>
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto" href="javascript:void(0)">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" style={{ border: '2px solid #DEB887' }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-5 text-center">
                                <Link to='/' className={`nav-link ${location.pathname == '/' ? 'nav-link-underline' : ''}`}>Home</Link>
                            </li>
                            <li className="nav-item mx-5 text-center">
                                <Link to='/' className={`nav-link ${location.pathname == '/shop' ? 'nav-link-underline' : ''}`}>Shop</Link>
                            </li>
                            <li className="nav-item mx-5 text-center">
                                <Link to='/' className={`nav-link ${location.pathname == '/pages' ? 'nav-link-underline' : ''}`}>Pages</Link>
                            </li>
                        </ul>
                        <Link to='/authenticate' className="me-2">
                            <button className=" cd-signin" type="button" onClick={handleSign}>Sign In</button>

                        </Link>
                        <Link to='/authenticate' className="ms-2">
                            <button className=" cd-signup" type="button" onClick={handleSign}>Sign Up</button>

                        </Link>
                    </div>
                </div>
            </nav>

        </div>

    )

}