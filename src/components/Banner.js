import React from 'react';
import {Link} from "react-router-dom";
import "./Banner.css";
import Background from "./telia-product-large-desktop-et_ru.jpg";

export const Banner = () =>{
    return(
        <div className="banner">
            <picture className="banner-background">
               <img src={Background}></img>
            </picture>
            <div className="banner-content">
                <h1 className="banner-upper">
                    <span>
                    SINULT VANA,<br/>MEILT UUS
                    </span>
                </h1>
                <div className="banner-middle">
                    <p className="banner-heading">Samsung Galaxy A32</p>
                    <p className="middle-text">
                        <span className="price">
                            6,56
                        </span>
                        &nbsp;
                        <span className="month">
                            €/kuu
                        </span>
                    </p>
                    <p className="kuumakse">Kuumakse 48 kuud</p>
                </div>
                <div className="banner-bottom">
                    <Link to="/" className="btn-mobile" >
                        <button className={"btn ${checkButtonStyle} ${checkButtonSize}"} style={{background: "#990ae3"}}>
                            Vaatan lähemalt
                        </button>
                    </Link>
                    <p className="small-text">Tegemist on finantsteenusega. Lepingutasu 0 €, järelmaksu intress Telia 1 kliendile 9,9%.</p>
                </div>
            </div>
        </div>
    )
}