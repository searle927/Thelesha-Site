import React from 'react';
import './Contacts.css';
import HomeBanner from '../Home/HomeBanner';
import NavBar from '../NavBar/NavBar';
import ContactForm from './ContactForm';
// import emailjs from "emailjs-com";

function Contacts() {
    return (
        <>
            <div className="aboutWrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div>
                <HomeBanner />
                <NavBar />

                <div className="contactContainer">
                    <h2 className="contact">Contact Me</h2>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contacts
