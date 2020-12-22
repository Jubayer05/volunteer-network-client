import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import "./Register.css";
import logo from "../../images/Group 1329.png";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Volunteering } from '../../App';
import { Link } from 'react-router-dom';


const Register = () => {
  const {volunteerInfo, selectedEvent} = useContext(Volunteering);
  const [info, setInfo] = volunteerInfo;
  const [event, setEvent] = selectedEvent;
      

  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const handleDateChange = (date) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const regDate = {
      date: `${date.getDate()} ${month}, ${date.getFullYear()}`,
    }
    
    setInfo({...info, ...regDate});
    setSelectedDate(date); 
  };

  const handleRegistration = () => { 
    fetch("http://localhost:5000/addVolunteer", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    
    const allEvent = [...event, info];
    setEvent(allEvent);
  }
    return (
        <div className="register">
            <img className="logo" src={logo} alt="logo"/>
            <div className="register-content">
                <h3 className="register-heading">Register as a Volunteer</h3>
                
                <TextField className="register-input" 
                id="standard-basic" 
                defaultValue={info.name} 
                label="Full Name" />

                <TextField className="register-input" 
                id="standard-basic" 
                defaultValue={info.email} 
                label="Username or Eamil" />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    className="register-input"
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Select a date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />        
                </Grid>
                </MuiPickersUtilsProvider>
                <TextField className="register-input" id="standard-basic" label="Write a description" />
                <TextField className="register-input" 
                id="standard-basic" 
                defaultValue={info.eventName} 
                label="Event Name" />
                <Button 
                  onClick={handleRegistration}
                  className="register-input registration-btn" 
                  variant="contained" 
                  color="secondary">
                  <Link to="/review">
                  Registration
                  </Link>
                </Button>
            </div>
        </div>
    );
};

export default Register;