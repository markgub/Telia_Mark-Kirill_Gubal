import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Slider.css";
import Background from "./telia-hero.png";
import Background2 from "./telia-hero-desktop-et_6.jpg"
import Background3 from "./telia-hero-desktop-et.jpg"

function Slide({
    image,
    visibility,
    text, 
    heading, 
    hColor, 
    tColor,
    bColor
}) {
    const slideStyle = {
        backgroundImage: "url(" + image + ")",
        backgroundSize: "contain",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "634.078px",
        margin: "-30px 100px 100px 0px",
        zIndex: visibility,
    };

    const slideTextStyle = {
        color: tColor,
    };

    return(
        <div className="slide" style={slideStyle}>
            <div className="textContainer">
                <h1 className="textHeading" style={{color: hColor}}>
                    {heading}
                </h1>
                <h4 className="regularText" style={slideTextStyle}>
                    {text}
                </h4>
                <Link to="/" className="beta-btn" >
                    <button className={"btn ${checkButtonStyle} ${checkButtonSize}"} style={{background: bColor}}>
                        Vaatan lähemalt
                    </button>
                </Link>
            </div>
        </div>
    )
};

export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(-1);

    function updateCurrentSlide() {
        if(currentSlide > 0){
            setCurrentSlide(currentSlide - 2);
        } else if(currentSlide == 0) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const timer = setTimeout(() => {
        //console.log('This will run after 8 seconds!')
        updateCurrentSlide();
    }, 8000);

    return (
        <>
            <div className="slider">
                <Slide hColor="#fff" tColor="#fff" visibility={-currentSlide} bColor="rgb(153, 10, 227)" heading="GO3 FILM" text="Parimad kodu- ja välismaised filmid, sarjad ja lastesisu eesti keeles. Kõik sinu lemmikud ühest kohast!" image={Background}></Slide>
                <Slide hColor="#990ae3" tColor="#000" visibility={1+currentSlide} bColor="rgb(153, 10, 227)" heading="ÜKS PIIRAMATU PAKETT KOGU PERELE" text="Piiramatut internetimahtu saad ühes paketis jagada kuni 5 kasutajaga." image={Background2}></Slide>
                <Slide hColor="#fff" tColor="#fff" visibility={2*currentSlide} bColor="rgb(153, 10, 227)" heading="Test Test Test Test " text="Test Test Test Test Test Test Test Test Test Test Test " image={Background3}></Slide>
            </div>
        </>
    )
}
