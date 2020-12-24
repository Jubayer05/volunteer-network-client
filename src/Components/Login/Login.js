import React, { useContext } from 'react';
import "./Login.css";
import logo from "../../images/Group 1329.png";
import google from "../../images/google.png";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Volunteering } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const {volunteerInfo} = useContext(Volunteering);
    const [info, setInfo] = volunteerInfo;

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const token = result.credential.accessToken;
            const user = {
                email: result.user.email,
                userName: result.user.displayName
            };
            const userInfo = {...info, ...user};
            setInfo(userInfo);
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
        
        
        
    }
    return (
        <div className="login-container">
            <img className="logo" src={logo} alt="logo"/>
            <div className="login-content">
                <h3 className="login-heading">Login With</h3> 
                <div className="google-login" onClick={handleSignIn}>
                    <img className="google-logo" src={google} alt="google"/>
                    <span>Continue With Google</span>
                    <span></span>
                </div>
                <p className="login-text">Don't have an account? <Link><span className="login-link">Create an account</span></Link></p>
            </div>
        </div>
    );
};

export default Login;