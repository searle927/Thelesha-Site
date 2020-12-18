import React from 'react';
import './Services.css';
import NavBar from '../NavBar/NavBar';
import HomeBanner from '../Home/HomeBanner';

function Services() {
    return (
        <>
            <div className="servicesWrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div>
                <HomeBanner />
                <NavBar />
                <div className="servicesContainer">
                    <div className="labServices">
                        <h1 className="labTitle">Laboratory Services</h1>
                        <hr></hr>
                        <p className="labPara">Whether your business requires routine water analysis for environmental compliance or you are a construction firm in need of asbestos testing to assess potential occupational exposure, our testing capabilities address a wide range of projects needs. Our capabilities include indoor and ambient air quality monitoring, water analysis and bulk/building material testing. We also provide services for specialized needs such as confined space testing and air moisture content analysis.</p>
                        <img className="labPic" src="https://i.imgur.com/5Zi2QPk.jpg" alt=""></img>

                    <div className="serviceCategories">
                    <h1 className="serviceTitle">Service Categories</h1>
                    <hr></hr><br />
                        <div className="serviceCards">
                            <div className="serviceCard1">
                                <h1 className="airQT">Air Quality Testing</h1>
                                <p className="airQTPara">Indoor and ambient air quality testing for using OSHA/NIOSH Sampling Methods </p><br /><br /><button className="serviceButton">click here</button>
                            </div>

                            <div className="serviceCard2">
                                <h1 className="airQT">Water Quality Testing</h1>
                                <p className="airQTPara">Highly sensitive detection to for fast turn-around times and accurate results</p><br /><br /><button className="serviceButton">click here</button>
                            </div>
                            
                            <div className="serviceCard3">
                                <h1 className="airQT">Bulk Material Testing</h1>
                                <p className="airQTPara">Construction and demolition projects that require pre/post testing for asbestos</p><br /><br /><button className="serviceButton">click here</button>
                            </div>

                            <div className="serviceCard4">
                                <h1 className="airQT">Other Applications</h1>
                                <p className="airQTPara">Soil analysis Continues space testing, landfill gas monitoring and air moisture analysis</p><br /><br />
                                <button className="serviceButton">click here</button>
                            </div>
                        </div>

                        <div className="labProd"><br />
                            <h1 className="labTitle">Laboratory Products</h1>
                            <hr></hr>
                            <div className="labProdContainer">
                            <img className="labPic2" src="https://i.imgur.com/PXOYAJ7.jpg" alt=""></img>
                            <p>We support your in-house laboratory needs as a leading provider of laboratory products required for efficient day-to-day operations and maximum throughput. Our product range includes, but is not limited to reagents, cleaning supplies, glassware, equipment, water treatment systems and emergency spill kits.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
