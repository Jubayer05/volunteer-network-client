import React from 'react';
import fakeData from '../../fakedata/fakedata';
import "./Home.css";


const Home = () => {
   console.log(fakeData)
    return (
        <div className="home-container">
            {
                fakeData.map(item => 
                    <div className="volunteer-item">
                        <img className="volunteer-image" src={item.image} alt="Volunteering Images"/>
                        <h2 className="volunteer-name">{item.name}</h2>
                    </div>
                )
            }
        </div>
    );
};

export default Home;