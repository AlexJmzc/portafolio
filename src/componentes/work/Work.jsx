import React, { useEffect, useState } from "react";
import "./work.css";
import { proyectosData, projectsNav, proyectosNav, projectsData, titles, titulos } from "./Data";
import Works from "./Works";

const Work = ({languaje}) => {
    const[nav, setNav] = useState([]);
    const[title, setTitle] = useState([]);

    useEffect(() => {
        if(languaje.name === 'English') {
            setNav(projectsNav);
            setTitle(titles);
        } else {
            setNav(proyectosNav);
            setTitle(titulos);
        }
    })

    return (
       <section className="portafolio section" id="portafolio">
            <h2 className="section__title">{title.title}</h2>
            <span className="section__subtitle">
                {title.subtitle}
            </span>

            <Works languaje={languaje} nav={nav}/>
       </section>
    )
}

export default Work