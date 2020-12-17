import React from 'react';
// import './Services.css';
import NavBar from '../NavBar/NavBar';
import HomeBanner from '../Home/HomeBanner';

function Services() {
    return (
        <>
            <div className="aboutWrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div>
                <HomeBanner />
                <NavBar />
            </div>
        </>
    )
}

export default Services
