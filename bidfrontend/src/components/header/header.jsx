import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [showSign, setShowSign] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSign = () => {
        setShowSign(true);
    };

    const handleLogout = () => {
        // Clear user from session storage
        sessionStorage.removeItem('user');
        // Redirect to home page or another suitable route
        navigate('/');
    };

    useEffect(() => {
        if (location.pathname === "/authenticate") {
            document.body.setAttribute("makeBack", "yes");
        } else {
            document.body.removeAttribute("makeBack");
        }
    }, [location.pathname]);

    // Check if the user is authenticated
<<<<<<< HEAD
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);
    const isAuthenticated = !!user;
    const isVendor = user?.isVendor;
=======
const user = JSON.parse(sessionStorage.getItem('user'));
const isAuthenticated = !!user;
const isVendor = user?.isVendor;

>>>>>>> 94b3473a47ae15b3a88f9e84ec69a7ebeacd0d0e

    return (
        <div>
            <nav className={`navbar navbar-expand-sm p-3  ${scrolling ? 'bg-change fixed-top' : ''}`}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand mx-auto">
                        RIBAKHA
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" style={{ border: '2px solid #DEB887' }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-5 text-center">
                                <Link to='/' className={`nav-link ${location.pathname === '/' ? 'nav-link-underline' : ''}`}>Home</Link>
                            </li>
                            <li className="nav-item mx-5 text-center">
                                <Link to='/shop' className={`nav-link ${location.pathname === '/shop' ? 'nav-link-underline' : ''}`}>Shop</Link>
                            </li>
                            <li className="nav-item mx-5 text-center">
                                <Link to='/Avis' className={`nav-link ${location.pathname === '/Avis' ? 'nav-link-underline' : ''}`}>Avis</Link>
                            </li>
                            {isAuthenticated && isVendor && (
                                <li className="nav-item mx-5 text-center">
                                    <Link to='/ajouter-article' className={`nav-link ${location.pathname === '/ajouter-article' ? 'nav-link-underline' : ''}`}>Ajouter Article</Link>
                                </li>
                            )}
                            {isAuthenticated && isVendor && (
                                <li className="nav-item mx-5 text-center">
                                    <Link to='/vendeur' className={`nav-link ${location.pathname === '/ajouter-article' ? 'nav-link-underline' : ''}`}>Mes Articles</Link>
                                </li>
                            )}
                            
                        </ul>
                        {isAuthenticated ? (
                            <button className="cd-signin" type="button" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link to='/authenticate#login' className="me-2">
                                <button className="cd-signin" type="button" onClick={handleSign}>
                                    Sign Up
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
