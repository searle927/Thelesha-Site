import React from 'react';
import NavBar from '../NavBar/NavBar';
import Top from '../Top/Top';
import HomeBanner from '../Home/HomeBanner';
import './AirQuality.css'

function AirQuality() {
    return (
        <>
            <Top />
            <HomeBanner />
            <NavBar />
            <div className="homeContainer">
                <div className="aqContainer">
                    <div className="aqTC">
                        <h1 className="mainTitle">Air Quality Testing</h1>
                        <hr/>
                        <p className="mainPara">Our advanced sampling equipment and technology allows us to conduct testing for a wide range air quality parameters and to seamlessly add-on testing for just about any parameter. We follow strict sampling and testing techniques in keeping with the United States Environmental Protection Agency (EPA) guidelines, as well as the National Institute for Occupational Safety & Health (NIOSH) and the Occupational Safety & Health Administration (OSHA).</p>
                    </div>
                    <div className="paramContainer">
                        <div className="parameters">
                            <h1 className="mainTitle">Most Common Parameters</h1>
                            <hr/>
                            <ul className="aqUL">
                            <div className="listA">
                                <div className="list1">
                                    <li className="aqList">Ammonia</li>
                                    <li className="aqList">Bacteria</li>
                                    <li className="aqList">Bacteria/Mold</li>
                                    <li className="aqList">Carbon Dioxide</li>
                                    <li className="aqList">Carbon Monoxide</li>
                                </div>
                                
                                <div className="list2">
                                    <li className="aqList">Mold</li>
                                    <li className="aqList">Nitric Oxide</li>
                                    <li className="aqList">Nitrogen Dioxide</li>
                                    <li className="aqList">Particulate Matter</li>
                                    <li className="aqList">Volatile Organic Compounds</li>
                                </div>
                            </div>  
                            </ul>
                        </div>

                        <div className="otherParameters">
                            <h1 className="mainTitle">Other Parameters-Metals, Hydrocarbons, Asbestos</h1>
                            <hr/>
                            <ul className="aqUL">
                            <div className="listB">
                                <div className="list3">
                                    <li className="aqList">Arsenic</li>
                                    <li className="aqList">Asbestos</li>
                                    <li className="aqList">Aluminum</li>
                                    <li className="aqList">Barium</li>
                                    <li className="aqList">Benzo[a]Pyrene</li>
                                </div>
                                <div className="list4">
                                    <li className="aqList">Benzene</li>
                                    <li className="aqList">Calcium</li>
                                    <li className="aqList">Chromium</li>
                                    <li className="aqList">Cobalt</li>
                                    <li className="aqList">Copper</li>
                                </div>
                                <div className="list5">
                                    <li className="aqList">Iron</li>
                                    <li className="aqList">Lead</li>
                                    <li className="aqList">Lithium</li>
                                    <li className="aqList">Magnesium</li>
                                    <li className="aqList">Manganese</li>
                                </div>    
                                <div className="list6">
                                    <li className="aqList">Nickel</li>
                                    <li className="aqList">Potassium</li>
                                    <li className="aqList">Phosphorus</li>
                                    <li className="aqList">Selenium</li>
                                    <li className="aqList">Silver</li>
                                </div>
                            </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AirQuality
