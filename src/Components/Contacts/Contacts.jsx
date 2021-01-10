import React from 'react';
import './Contacts.css';
import HomeBanner from '../Home/HomeBanner';
import NavBar from '../NavBar/NavBar';
import ContactForm from './ContactForm';
import Top from '../Top/Top';


function Contacts() {
    return (
        <>
            <Top />
            <HomeBanner />
            <NavBar />
            <div className="aboutWrapper">
                <div className="contactContainer">
                    <h2 className="contact">Contact Me</h2>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contacts
