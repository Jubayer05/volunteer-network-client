import React from 'react';
import "./RegisterList.css";
import logo from "../../images/Group 1329.png";
import trash from "../../images/trash-2 9.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

const RegisterList = () => {
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
                        <FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;
                        <span>Add Event</span>
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
                        <div className="resisterList__grid registerList__content--userInfo">
                           <div className="resisterList__name">
                               <p>Jubayer</p>
                               <p>Jubayer</p>
                               <p>Jubayer</p>
                               <p>Jubayer</p>
                               <p>Jubayer</p>
                               <p>Jubayer</p>
                           </div>
                           <div className="registerList__email">
                               <p>programmer.jubayer@gmail.com</p>
                               <p>jubayerahmed.math.just@gmail.com</p>
                               <p>programmer.jubayer@gmail.com</p>
                               <p>jubayerahmed.math.just@gmail.com</p>
                               <p>programmer.jubayer@gmail.com</p>
                               <p>jubayerahmed.math.just@gmail.com</p>
                           </div>
                           <div className="resisterList__date">
                               <p>25/12/2020</p>
                               <p>25/12/2020</p>
                               <p>25/12/2020</p>
                               <p>25/12/2020</p>
                               <p>25/12/2020</p>
                               <p>25/12/2020</p>
                           </div>
                           <div className="resisterList__event">
                               <p>organize book</p>
                               <p>organize book</p>
                               <p>organize book</p>
                               <p>organize book</p>
                               <p>organize book</p>
                               <p>organize book</p>
                           </div>
                           <div className="resisterList__action">
                               <img src={trash} className="trash-btn" alt=""/>
                               <img src={trash} className="trash-btn" alt=""/>
                               <img src={trash} className="trash-btn" alt=""/>
                               <img src={trash} className="trash-btn" alt=""/>
                               <img src={trash} className="trash-btn" alt=""/>
                               <img src={trash} className="trash-btn" alt=""/>
                           </div>    
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterList;