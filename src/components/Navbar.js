import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "./Button.js";
import "./Navbar.css";
import logo from './logo.png';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div>
                        <ul className="nav-menu-upper-left">
                            <li className="nav-item-upper">
                                <Link to="/" className="nav-links" >
                                    Eraklient
                                </Link>
                            </li>
                            <li className="nav-item-upper">
                                <Link to="/" className="nav-links" >
                                    Äriklient
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav-menu-upper-right"> 
                            <li className="nav-item-upper">
                                <Link to="/" className="nav-links" >
                                    Juurdepääsetavus
                                </Link>
                            </li>
                            <li className="nav-item-upper">
                                <Link to="/" className="nav-links" >
                                    Русский
                                </Link>
                            </li>
                            <li className="nav-item-upper">
                                <Link to="/" className="nav-links" >
                                    English
                                </Link>
                            </li>
                            <li className="nav-item-upper">
                                <Link to="/" className="nav-links" >
                                    Sisenen
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="navbar-logo">
                                Telia
                                <image src={logo} width="100" height="40" alt="logo"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="menu-icon">
                                <i className={click ? "fas fa-times" : "fas fa-bars"} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Mobiil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                TV
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Internet
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Lisateenused
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                E-pood
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Pakkumised
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Abi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Iseteenindus
                            </Link>
                        </li>
                    </ul>
                    {/*button && <Button buttonStyle="btn--outline">Sisenen</Button>*/}
                </div>
            </nav>
        </>
    )
}
