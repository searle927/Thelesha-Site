import React from 'react';
import './BulkMaterial.css';
import Top from '../Top/Top';
import HomeBanner from '../Home/HomeBanner';
import NavBar from '../NavBar/NavBar';

function BulkMaterial() {
    return (
        <>
            <Top />
            <HomeBanner />
            <NavBar />
            <div className="homeContainer">
              
                <div className="bulkSection1">
                    <h1 className="mainTitle">Asbestos Testing</h1>
                    <hr></hr>
                    <p className="mainPara">Demolition and construction projects require testing for compounds that are considered occupational hazards. Through our regional and international laboratory partners, IMEX Inc. offers bulk and other building material testing for asbestos.  Bulk material testing is available for both Polarized Light Microscopy (PLM) and Transmission Electron Microscopy (TEM) methods.</p>
                </div>
                <div className="asbestosContainer">
                <div className="bulkSection2">
                    <h1 className="mainTitle">About Asbestos</h1>
                    <hr></hr>
                    <p className="mainPara">Asbestos is the name given to a group of six minerals found in the natural environment. Together, these six minerals form bundles of fibers that are durable and resistant to heat, chemicals and fire. For these reasons, asbestos is used in a wide variety of building and commercial applications.</p>
                    
                    <p className="mainPara">Asbestos is, however, a known health hazard and carcinogen. People can be exposed to asbestos when asbestos-containing material become friable or is released into the air. Once airborne, asbestos can be inhaled where it causes inflammation of the lungs. The effects of asbestos are insidious and these effects are therefore do not manifest for years. Other long-term effects include cancer of the lungs, larynx (voice box) and ovaries.</p>
                    
                    <p className="mainPara">Examples of asbestos-containing materials include cement, roofing, piping, floor tile, patient coating, plastics and automobile parts.</p>
                </div>

                <div className="bulkSection3">
                    <img className="bulkPic" src="https://i.imgur.com/SaMeSVz.jpg" alt=""/>
                </div>
              </div>
            </div>
        </>
    )
}

export default BulkMaterial
