import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
    return (
       <section className="portafolio section" id="portafolio">
            <h2 className="section__title">Portafolio</h2>
            <span className="section__subtitle">
                Mis trabajos
            </span>

            <Works />
       </section>
    )
}

export default Work