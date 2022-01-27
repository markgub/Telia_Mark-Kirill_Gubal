import React from "react";
import {Navbar} from "../components/Navbar"
import {Slider} from "../components/Slider"
import {News} from "../components/News"
import {Footer} from "../components/Footer"
import {Menu} from "../components/Menu"
import {Banner} from "../components/Banner"

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Menu/>
            <News/>
            <Banner/>
            <Footer/>
        </div>
    )
}