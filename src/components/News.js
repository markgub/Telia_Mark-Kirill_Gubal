import React from 'react';
import "./News.css";
import {Link} from "react-router-dom";

export const News = () => {
    return(
        <div className="news-container">
            <div></div>
            <h2>Uudised</h2>
            <div className="news-items">
                <div className="news-item">
                    <div className="date-text">06. aprill 2021 </div>
                    <a href="./" className="regular-text">Telia langetab erinevate nutiseadmete hinda kuni mitusada eurot</a>
                </div>
                <div className="news-item">
                    <div className="date-text">06. aprill 2021 </div>
                    <a href="./" className="regular-text">Telia langetab erinevate nutiseadmete hinda kuni mitusada eurot</a>
                </div>
                <div className="news-item">
                    <div className="date-text">06. aprill 2021 </div>
                    <a href="./" className="regular-text">Telia langetab erinevate nutiseadmete hinda kuni mitusada eurot</a>
                </div>
            </div>
            <Link to="/" className="btn-mobile" >
                <button className={"btn ${checkButtonStyle} ${checkButtonSize}"} style={{background: "#990ae3"}}>
                    Vaatan lähemalt
                </button>
            </Link>
        </div>
    )
}