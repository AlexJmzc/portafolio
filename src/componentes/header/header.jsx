import React, { useEffect, useState } from "react";
import "./header.css";
import { headerData } from "./Data";
import { datosHeader } from "./Data";

const Header = ({languaje, setLanguaje}) => {
    const[Toggle, showMenu] = useState(false);
    const[data, changeData] = useState([]);

    useEffect(() => {
        if(languaje.name === 'English') {
            changeData(headerData);
        } else {
            changeData(datosHeader);
        }
    }, [languaje]);

    const handleClick = (e) => {
        if(languaje.name === 'English') {
            setLanguaje({name: 'Spanish'});
        } else {
            setLanguaje({name: 'English'});
        } 
    }

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Javier</a>

                <div className={Toggle ? "nav__menu show-menu" :
                    "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                {data.home}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#portafolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                {data.portfolio}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                {data.information}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                {data.skills}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                {data.contact}
                            </a>
                        </li>
                        <li className="nav__item">
                            <label class="switch"> 
                                <input type="checkbox"/>
                                <span class="slider round" onClick={(e) => {
                                    handleClick(e);
                                }}></span>
                            </label>
                        </li>
                    </ul>

                    

                    <i class="uil uil-times nav__close" onClick={() => showMenu
                (!Toggle)}></i>
                </div> 

                <div className="nav__toggle" onClick={() => showMenu
                (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header