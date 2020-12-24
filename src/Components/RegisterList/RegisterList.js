import React, { useEffect, useState } from 'react';
import "./RegisterList.css";
import logo from "../../images/Group 1329.png";
import trash from "../../images/trash-2 9.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const RegisterList = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allUser')
        .then(res => res.json())
        .then(data => setUserData(data));
    }, []);

    const handleDeleteUI = (e) => {
        e.target.parentElement.parentElement.style.display = 'none';
    }
    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/deleteUser/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className="multiple">
            <div className="multiple__header">
                <img src={logo} className="logo" alt=""/>
                <h3 className="multiple__heading">Volunteer Register List</h3>
            </div>
            <div className="multiple__container">
                <div className="multiple__addEvent--container">
                    <div className="multiple__addEvent mb-20 cursor">
                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;
                        <span>Volunteer Register List</span>
                    </div>
                    <div className="cursor">
                        <Link to="/addEvent" className="toggle-link">
                            <FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;
                            <span>Add Event</span>
                        </Link>
                    </div>
                </div>
                <div className="multiple__content">
                    <div className="multiple__content--main">
                        <div className="resisterList__grid registerList__content--nav">
                            <li>Name</li>
                            <li>Email Id</li>
                            <li>Registration Date</li>
                            <li>Event Name</li>
                            <li>Action</li>
                        </div>
                        {   userData.map(user => 
                            <div key={ user._id}className="resisterList__grid registerList__content--userInfo">
                           <div className="resisterList__name">
                                 <p>{user.userName}</p>
                           </div>
                           <div className="registerList__email">
                                   <p>{user.email}</p>
                           </div>
                           <div className="resisterList__date">
                                  <p>{user.date}</p>
                           </div>
                           <div className="resisterList__event">
                                   <p>{user.title}</p>
                           </div>
                           <div className="resisterList__action" onClick={handleDeleteUI}>
                               <img onClick={() => handleDeleteUser(`${user._id}`)} src={trash} className="trash-btn" alt=""/>
                           </div>    
                        </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterList;