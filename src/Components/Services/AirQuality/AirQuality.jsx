import React from 'react';
// import NavBar from '.../NavBar/NavBar';
// import HomeBanner from '.../HomeBanner/HomeBanner';

function AirQuality() {
    return (
        <>
            <div className="aboutWrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div>
                {/* <HomeBanner /> */}
                {/* <NavBar /> */}
                <div className="aqContainer">
                    <div className="aqTC">
                        <h1 className="aqHeader">Air Quality Testing</h1>
                        <p className="aqPara">Our advanced sampling equipment and technology allows us to conduct testing for a wide range air quality parameters and to seamlessly add-on testing for just about any parameter. We follow strict sampling and testing techniques in keeping with the United States Environmental Protection Agency (EPA) guidelines, as well as the National Institute for Occupational Safety & Health (NIOSH) and the Occupational Safety & Health Administration (OSHA).</p>
                    </div>
                    <div className="parameters">
                        <h1 className="aqHeader">Most Common Parameters</h1>
                        <ul>
                            <li>Ammonia</li>
                            <li>Bacteria</li>
                            <li>Bacteria/Mold</li>
                            <li>Carbon Dioxide</li>
                            <li>Carbon Monoxide</li>
                            <li>Mold</li>
                            <li>Nitric Oxide</li>
                            <li>Nitrogen Dioxide</li>
                            <li>Particulate Matter</li>
                            <li>Volatile Organic Compounds</li>
                        </ul>
                    </div>

                    <div className="otherParameters">
                        <h1 className="aqHeader">Most Common Parameters</h1>
                        <ul>
                            <li>Arsenic</li>
                            <li>Asbestos</li>
                            <li>Aluminum</li>
                            <li>Barium</li>
                            <li>Benzo[a]Pyrene</li>
                            <li>Benzene</li>
                            <li>Calcium</li>
                            <li>Chromium</li>
                            <li>Cobalt</li>
                            <li>Copper</li>
                            <li>Iron</li>
                            <li>Lead</li>
                            <li>Lithium</li>
                            <li>Magnesium</li>
                            <li>Manganese</li>
                            <li>Nickel</li>
                            <li>Potassium</li>
                            <li>Phosphorus</li>
                            <li>Selenium</li>
                            <li>Silver</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AirQuality
