import React, { useEffect, useState } from 'react';
import Header from '../Headers/Header';
import VolunteerEvent from '../VolunteerEvent/VolunteerEvent';
import "./Home.css";


const Home = () => {
   const [allEvent, setAllEvent] = useState([]);
   useEffect(() => {
        fetch('http://localhost:5000/allEvent')
        .then(response => response.json())
        .then(data => setAllEvent(data))
   }, []);

   console.log(allEvent);

    return (
        <div className="home">
            <Header></Header>
        <div className="home-container">
            {
                allEvent.map(item => 
                <VolunteerEvent key={item.id} item={item} />
                )
            }
        </div>
        </div>
    );
};

export default Home;