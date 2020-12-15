import React, { useState } from 'react';
import "../RegisterList/RegisterList.css";
import logo from "../../images/Group 1329.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import upload from "../../images/cloud-upload-outline 1.png"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button, TextareaAutosize, TextField } from '@material-ui/core';

const AddEvent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return (
        <div className="multiple">
            <div className="multiple__header">
                <img src={logo} className="logo" alt=""/>
                <h3 className="multiple__heading">Volunteer Register List</h3>
            </div>
            <div className="multiple__container">
                <div className="multiple__addEvent--container">
                    <div className="mb-20 cursor">
                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;
                        <span>Volunteer Register List</span>
                    </div>
                    <div className="multiple__addEvent cursor">
                        <FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;
                        <span>Add Event</span>
                    </div>
                </div>
                <div className="multiple__content">
                    <div className="multiple__content--main">
                        <div className="addEvent__grid">
                           <div className="addEvent__input">
                               <h4>Event Name</h4>
                               <TextField 
                               className="register-input"
                               id="outlined-basic" 
                               label="Event Title" variant="outlined" />
                           </div>
                           <div className="addEvent__input">
                               <h4>Date</h4>
                               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                    className="register-input"
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />        
                                </Grid>
                                </MuiPickersUtilsProvider>
                           </div>
                           <div className="addEvent__input">
                               <h4>Description</h4>
                               <TextareaAutosize
                               className="register-input addEvent__textarea"
                               aria-label="minimum height" 
                               rowsMin={7} 
                               placeholder="Description" />

                           </div>
                           <div className="addEvent__input">
                               <h4>Upload a Images</h4>
                               <Button variant="outlined"
                               component="label"
                               color="primary">
                                <img className="upload-image" src={upload} alt=""/>
                                <input
                                    type="file"
                                    hidden
                                />
                                Upload Image
                                </Button>
                           </div>
                        </div> 
                    </div>
                        <div className="upload-btn-container">
                            <Button 
                            className="upload-btn" 
                            variant="contained" 
                            color="secondary">Submit</Button>
                        </div>
                </div>
            </div>
            </div>
    );
};

export default AddEvent;