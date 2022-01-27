import React, {useState} from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";

export const Footer = () =>{
    return(
        <>
            <footer className="footer">
                <div className="footer-upper">
                    <div className="container footer-upper-container">
                        <ul>
                            <li>
                                <h1>
                                    Ettevõttest
                                </h1>
                            </li>
                            <li>
                                <Link to="/">
                                    Ettevõttest
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Telia ühiskonnas
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Karjäär Telias
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Hinnakiri
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Lepingud ja tingimused
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Privaatsusteade
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Küpsiste seaded
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>
                                    Kontaktid
                                </h1>
                            </li>
                            <li>
                                <Link to="/">
                                    Kontaktid
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Esindused
                                </Link>
                            </li>
                        </ul> 
                        <ul>
                            <li>
                                <h1>
                                    Partnerile
                                </h1>
                            </li>
                            <li>
                                <Link to="/">
                                    Sideettevõtjatele
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Ehitajale arendajale
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Tarnijale
                                </Link>
                            </li>
                        </ul> 
                        <ul>
                            <li>
                                <h1>
                                    Sotsiaalmeedia
                                </h1>
                            </li>
                            <li>
                                <Link to="/">
                                    Digitark
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Linkedln
                                </Link>
                            </li>
                        </ul> 
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container footer-bottom-container">
                        <ul className="footer-bottom-list"> 
                            <li className="footer-bottom-item">
                                <span>
                                    Telia Eesti AS
                                </span>
                            </li>
                            <li className="footer-bottom-item">
                                <span>
                                    Telia is a registered Trademark of Telia Company AB
                                </span>
                            </li>
                        </ul>
                    </div> 
                </div>
            </footer>
        </>
    )
}
