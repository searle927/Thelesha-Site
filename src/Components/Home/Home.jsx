import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import HomeBanner from './HomeBanner';

function Home() {
    return (
        <>
            <div className="homewrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div> 
                <HomeBanner />
                <NavBar /><br /><br />
                <div className="homeContainer">
                    <div className="testing">
                        <h1 className="testingTitle">Environmental Testing & Analytical Services</h1>
                        <hr></hr>
                        <p className="testingPara">IMEX Inc. is registered with the Environmental Protection Agency-Guyana and provides environmental testing and analysis of air, water, soil, building material and other environmental samples. Our environmental laboratory is uniquely equipped to test for 100+ parameters using advanced instrumentation and analytical techniques.</p><br />
                        <img className="testingPic" src="https://i.imgur.com/5Zi2QPk.jpg" alt=""></img><br /><br /><br />
                    </div>
                    <div className="industries">
                        <h1 className="industriesHeader">Industries We Serve</h1>
                        <hr></hr>
                        <p className="industriesPara">IMEX Inc. is a proudly partners with a wide range of businesses in the industrial and development sectors from mining and construction, public works, oil and gas, food and agro-processing, and healthcare. We also offer services to residential clients through our indoor testing packages.</p><br /><br />
                    </div>
                    <div className="picContainer">
                        <img className="homePic" src="https://i.imgur.com/pF3TgQF.jpg" alt=""></img>
                        <img className="homePic" src="https://i.imgur.com/sbtLj14.jpg" alt=""></img>
                        <img className="homePic" src="https://i.imgur.com/jvGirrw.jpg" alt=""></img>
                        <img className="homePic" src="https://i.imgur.com/pF3TgQF.jpg" alt=""></img>
                        <img className="homePic" src="https://i.imgur.com/sbtLj14.jpg" alt=""></img>
                        <img className="homePic" src="https://i.imgur.com/jvGirrw.jpg" alt=""></img><br /><br />
                    </div> 
                    <div className="howWeWork">
                        <h1 className="howWeWorkHeader">How We Work</h1>
                        <hr></hr>
                        <div className="howWeWorkContainer">
                            <p className="howWeWorkPara1"><span>Efficiency & Service Availability -</span> We are committed to utilizing local talent, expertise and capacity which significantly reduces analytical turn-around times and increases service availability and operational efficiency.</p><br />

                            <p className="howWeWorkPara2"><span>Quality Assurance -</span> Strict quality assurance practices that ensure analytical reliability  owing to our fully computerized management systems and procedures, and advanced analytical equipment and instrumentation.</p><br />

                            <p className="howWeWorkPara3"><span>Industry Standards -</span> Our processes are guided by industry standards and best practices for sampling and analysis and conducted using of state-of-the art equipment and instrumentation.</p><br />

                            <p className="howWeWorkPara4"><span>Strategic Partnerships -</span> Our strategic partners allow us to expand our product and service portfolio which in turn facilitates a wide range of client requests for products and  environmental testing services. </p><br />
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Home
