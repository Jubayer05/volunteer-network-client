import React, { useContext, useEffect, useState } from 'react';
import "./Review.css";
import logo from "../../images/Group 1329.png";
import { Button } from '@material-ui/core';
import { Volunteering } from '../../App';
import { Link } from 'react-router-dom';

const Review = () => {
    const {volunteerInfo} = useContext(Volunteering);
    const [info, setInfo] = volunteerInfo;
    const [registeredEvent, setRegisteredEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/registerEvent?email=${info.email}`)
        .then(response => response.json())
        .then(data => setRegisteredEvent(data));
    }, []);

    const handleDeleteRegister = (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    }

    const handleDeleteRegisterDB = (id) => {
        fetch(`http://localhost:5000/deleteRegisterDB/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console(data))
    }

    return (
        <div className="review">
            <div className="navbar">
                <img src={logo} className="logo" alt="navbar-logo"/>
                <ul className="navbar-list">
                    <li><Link to="/" className="navbar-link" href="#facebook">Home</Link></li>
                    <li><a className="navbar-link" href="#donations">Donations</a></li>
                    <li><Link to="/review" className="navbar-link">Events </Link></li>
                    <li><a className="navbar-link" href="#events">Blogs</a></li>
                    <li><a className="navbar-link" href="#names"><strong>{info.userName}</strong></a></li>
                </ul>
            </div>

            <div className="review-container">
            {
            registeredEvent.map(event => <div className="review-card" key={event._id}>
                    <img src={`http://localhost:5000/${event.name}`} className="review__card--image" alt=""/>
                    <div className="review__card--content">
                        <h3 className="review__card--heading">{event.title}</h3>
                        <p className="review__card--date">{event.date}</p>
                        <span onClick={() => handleDeleteRegisterDB(`${event._id}`)}>
                        <Button onClick={handleDeleteRegister} 
                        className="review__card--btn" 
                        variant="contained" color="primary">
                            Cancel
                        </Button>
                        </span>
                    </div>
                </div> 
            )}            
            </div>
        </div>
    );
};
export default Review;