import React, { useContext } from 'react';
import "./Review.css";
import logo from "../../images/Group 1329.png";
import { Button } from '@material-ui/core';
import { Volunteering } from '../../App';
import { Link } from 'react-router-dom';

const Review = () => {
    const {volunteerInfo, selectedEvent} = useContext(Volunteering);
    const [info, setInfo] = volunteerInfo;
    const [events, setEvents] = selectedEvent;
    console.log(events)
    return (
        <div className="review">
            <div className="navbar">
                <img src={logo} className="logo" alt="navbar-logo"/>
                <ul className="navbar-list">
                    <li><Link to="/" className="navbar-link" href="#facebook">Home</Link></li>
                    <li><a className="navbar-link" href="#donations">Donations</a></li>
                    <li><Link to="/review" className="navbar-link">Events </Link></li>
                    <li><a className="navbar-link" href="#events">Blogs</a></li>
                    <li><a className="navbar-link" href="#names"><strong>{info.name}</strong></a></li>
                </ul>
            </div>

            <div className="review-container">
            {
            events.map(event => <div className="review-card" key={event.id}>
                    <img src={event.image} className="review__card--image" alt=""/>
                    <div className="review__card--content">
                        <h3 className="review__card--heading">{event.eventName}</h3>
                        <p className="review__card--date">{event.date}</p>
                        <Button className="review__card--btn" variant="contained" color="primary">Cancel</Button>
                    </div>
                </div> 
            )}            
            </div>
        </div>
    );
};
export default Review;