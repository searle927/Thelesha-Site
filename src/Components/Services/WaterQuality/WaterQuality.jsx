import React from 'react'
// import HomeBanner from '.../HomeBanner/HomeBanner';
// import the NavBar

function WaterQuality() {
    return (
        <>
            <div className="aboutWrapper">
                <div className="top">
                    <img className="icon" src="https://i.imgur.com/t25ulCK.png" alt=""></img> 
                    <h1 className="topText">Environmental Testing, Inc.</h1>
                </div>
                {/* <HomeBanner /> */}
                {/* <NavBar /> */}

                <div className="wqContainer">
                    <div className="wqAnalysis">
                        <h1 className="wqHeader">Water Quality Analysis</h1>
                        <p className="wqPara">IMEX Inc. utilizes advanced instrumentation to provide comprehensive water quality analysis for industrial facilities, water processing plants, farms and homes. We work with several clients across these industries where we conduct routine sampling and analysis for compliance with the Environmental Protection Agency and other Environment, Health & Safety requirements.</p>
                        
                        <p>Sample Collection & Transport: Our field technicians can pick-up and transport client-collected samples to our lab. Alternatively, our field technicians can conduct sampling offering clients a truly end-to-end service.</p>
                        
                        <p>Our Testing Solutions: Potable, drinking, surface water and process water. We also conduct testing to Total Petroleum Hydrocarbon (TPH) in water using USEPA approved methods.</p>
                    </div>

                    <div className="wqList">
                    <div className="wq1">
                            <div className="wq1a">
                                <img className="wqPics" src="https://i.imgur.com/SaMeSVz.jpg" alt=""></img>
                            </div>
                            <div className="wq1b">
                                <h1 className="wqTitle">Municipal Water</h1>
                                <h2 className="wqCaption">Sample Collection, Analysis & Reporting</h2>
                                <p className="wqPara">Our team of experienced technicians and laboratory analysts can collect, analyze and report results for public water supply entities ensuring compliance with public safety requirements.</p>
                            </div>
                        </div>

                        <div className="wq2">
                            <div className="wq2a">
                                <img className="wqPics" src="https://i.imgur.com/SaMeSVz.jpg" alt=""></img>
                            </div>
                            <div className="wq2b">
                                <h1 className="wqTitle">Drinking Water</h1>
                                <h2 className="wqCaption">Bottling Plants & Resellers</h2>
                                <p className="wqPara">Run your business with the peace of mind and confidence that comes from knowing your water is safe from microbiological, organic and inorganic contaminants, and metals that can the affect overall taste and well-being of consumers.</p>
                            </div>
                        </div>

                        <div className="wq3">
                            <div className="wq3a">
                                <img className="wqPics" src="https://i.imgur.com/SaMeSVz.jpg" alt=""></img>
                            </div>
                            <div className="wq3b">
                                <h1 className="wqTitle">Oil & Gas Effluent</h1>
                                <h2 className="wqCaption">Tailored Water Quality Parameters</h2>
                                <p className="wqPara">Oil and gas operations may impact surrounding sources of water used for drinking and other daily activities of living. Our oil and gas testing packages are tailored to the industry and test for common contaminants from petroleum operations. Click here to view our packages.</p>
                            </div>
                        </div>

                        <div className="wq4">
                            <div className="wq4a">
                                <img className="wqPics" src="https://i.imgur.com/SaMeSVz.jpg" alt=""></img>
                            </div>
                            <div className="wq4b">
                                <h1 className="wqTitle">Industrial Waste Water</h1>
                                <h2 className="wqCaption">Industrial & Manufacturing Trade Effluent</h2>
                                <p className="wqPara">Our field operators travel to various industrial sites to conduct sampling of trade effluent from industrial operations. Our trade effluent testing services offer analysis for various microbiological, heavy metals, inorganic and organic contaminants.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default WaterQuality
