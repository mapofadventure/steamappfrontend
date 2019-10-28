import React from 'react';

const twitterLogo = require('../images/twitter.svg');
const linkedInLogo = require('../images/linkedin.png');
const gitHubLogo = require('../images/github.png');


const AppLogoRow = (props) => {
    return (
        <div className="AppLogoRow">
            <div className="logoRow">
                <a href="https://github.com/mapofadventure">
                    <img className="brandLogo" src={twitterLogo} width="70px" height="70px"></img>
                </a>
            </div>
            <div className="logoRow">
                <a href="https://github.com/mapofadventure">
                    <img className="brandLogo" src={linkedInLogo} width="70px" height="70px"></img>
                </a>

            </div>
            <div className="logoRow">
                <a href="https://github.com/mapofadventure">
                    <img className="brandLogo" src={gitHubLogo} width="70px" height="70px"></img>
                </a>
            </div>
        </div>
    );
}

export default AppLogoRow;