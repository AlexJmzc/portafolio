import React from "react";
import "./about.css";
import AboutImg from "../../assets/Perfil.jpg";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Acerca de mí</h2>
            <span className="section__subtitle">
                Mi presentación
            </span>

            <div className="about__container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">Soy un desarrollador de frontend y backend comprometido a crear soluciones de calidad
                    y escalables para mis clientes. 
                    Puedo trabajar con diferentes lenguajes y frameworks, 
                    incluyendo JavaScript, HTML, CSS, y frameworks como React y Angular 
                    para el desarrollo de frontend, y lenguajes como Python, Java y C# 
                    para el desarrollo de backend. También tengo experiencia en el desarrollo 
                    de aplicaciones web y móviles.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About