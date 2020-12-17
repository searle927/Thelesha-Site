import React from 'react'
import NavBar from '../NavBar/NavBar';
import HomeBanner from '../Home/HomeBanner';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <div className="aboutWrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div>
                <HomeBanner />
                <NavBar />
                <div className="aboutContainer">
                    <div className="aboutGrid">
                        <h1 className="aboutTitles">Who We Are</h1>
                            <hr></hr>
                        <p className="aboutPara">IMEX Inc. is a service provider to companies across the healthcare, industrial and extractive sectors with a focus on providing environmental and analytical testing and industrial product procurement services to businesses. Our services address areas of environmental compliance, occupational safety and health, and quality assurance. Our success and ability to meet the needs our clients are driven by our commitment to the highest industry standards, a growing network of strategic laboratory and supplier partnerships, and our team of highly skilled personnel.</p>
                
                        <h1 className="aboutTitles">Our Mission</h1>
                            <hr></hr>
                        <p className="aboutPara">Our products and services are important to the success of the businesses we serve as they deliver essential commodities to world. We take this basic understanding of our business seriously which is further exemplified in our mission-"Connecting people to essential resources."</p>
                
                        <h1 className="aboutTitles">Service Excellence & Quality</h1>
                            <hr></hr>
                        <p className="aboutPara">We remain committed to product and service excellence and ensuring we deliver our best to clients 100% of the time. We understand that our environmental testing and analytical services play an integral role in the safe operations and financial security of our clients and have integrated into our business model management systems that ensure our continued process improvement, testing reliability and service delivery.</p>
                    </div>
                    
                    <div className="aboutGrid2">
                        <h3 className="available">We're Available!</h3>
                        <br />
                        <p>Business Hours</p>
                        <ul>
                            <li>Mon-Fri, 09:00-17:00 hours</li>
                            <li>Same-day consultations available</li>
                            <li>24-hour sampling available</li>
                            <br />
                        </ul>
                        <p>Key Contacts</p>
                        <ul>
                            <li>Main: 592-222-9589</li>
                            <li>Mobile: 592-600-6121</li>
                            <li>Email: info@imexlogic.com</li>
                        </ul><br />
                        <button> Email Service Request</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
