import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Group 1329.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="navbar-overlay">
           <div className="navbar">
                <img src={logo} className="logo" alt="navbar-logo"/>
                <ul className="navbar-list">
                    <li><a className="navbar-link" href="#facebook">Home</a></li>
                    <li><a className="navbar-link" href="#donations">Donations</a></li>
                    <li><Link to="/review" className="navbar-link" href="#events">Events</Link></li>
                    <li><a className="navbar-link" href="#blog">Blog</a></li>
                    <li>
                        <Button  
                            className="register-btn"
                            variant="contained" 
                            color="secondary">
                            Register
                        </Button>
                    </li>
                    <li>
                        <Button  
                            className="admin-btn"
                            variant="contained" 
                            color="secondary">
                            Admin
                        </Button>
                    </li>
                </ul>
            </div>

            <div className="header-container">
                <div className="header-content">
                    <h2 className="header-heading">I grow by helping people in need.</h2>
                    <input className="header-input" type="text" placeholder="Search..."/>
                    <Button  
                        className="header-btn"
                        variant="contained" 
                        color="secondary">
                        Search
                    </Button>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Header;