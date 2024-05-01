import React, { useEffect, useState } from "react";
import Data from "./Data";
import { homeData } from "./HomeData";
import { datosHome } from "./HomeData";
import "./home.css";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Home = ({languaje}) => {

    const[data, setData] = useState([]);

    useEffect(() => {
        if(languaje.name === 'English') {
            setData(homeData);
        } else {
            setData(datosHome);
        }
    });

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img"></div>

                    <Data data={data}/>
                </div>

                <ScrollDown data={data}/>
            </div>
        </section>
    )
}

export default Home