import React from 'react';
import fakeData from '../../fakedata/fakedata';
import Header from '../Headers/Header';
import VolunteerEvent from '../VolunteerEvent/VolunteerEvent';
import "./Home.css";


const Home = () => {
   console.log(fakeData)
    return (
        <div className="home">
            <Header></Header>
        <div className="home-container">
            {
                fakeData.map(item => 
                <VolunteerEvent key={item.id} item={item} />
                )
            }
        </div>
        </div>
    );
};

export default Home;