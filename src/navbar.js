import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
            setShowSearch(false);
        }
    };

    return (
        <header className="navbar">
            <div className="logon">
                <Link to="/">
                    <img
                        src="/AarvasaL.png"
                        alt="Aarvasa Logo"
                        className="logon-image"
                    />
                </Link>
            </div>
            <nav className="menu">
                <div className="menu-container">
                    <div className="nav-links">
                        <Link to="/aboutus">About us</Link>
                        <Link to="/agents">Agents</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/filter">Listings</Link>
                    </div>
                    <div className="search-wrapper">
                        {showSearch && (
                            <div className="search-box">
                                <form onSubmit={handleSearchSubmit} className="search-form">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        autoFocus
                                        className="search-input"
                                    />
                                </form>
                            </div>
                        )}
                        <button 
                            className="search-button"
                            onClick={() => setShowSearch(!showSearch)}
                            type="button"
                            aria-label="Toggle search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.77 12.27l4.22 4.22a1 1 0 0 1-1.41 1.41l-4.22-4.22a7.5 7.5 0 1 1 1.41-1.41zm-6.77 1.03a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#000" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`profnav ${showSearch ? 'hide-profile' : ''}`}>
                <Link to="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="12" fill="#007bff" />
                        <circle cx="12" cy="8" r="4" fill="none" stroke="#ffffff" strokeWidth="2" />
                        <path d="M5.5 18.5a8.5 8.5 0 0 1 13 0" fill="none" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                </Link>
            </div>
            <Link to="/contactus">
                <button className="contact-btn">Contact us</button>
            </Link>
        </header>
    );
};

export default Navbar;