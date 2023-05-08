import React, { useState } from "react";
import "./header.css";
import { headerData } from "./Data";
import { datosHeader } from "./Data";

const Header = () => {
    const[Toggle, showMenu] = useState(false);
    const[languaje, changeLanguaje] = useState(false);

    var dt = headerData;

    const change = () => {
        console.log()
        if(languaje == true) {
            dt = headerData;
            console.log(dt.home + "1111");
            changeLanguaje(!languaje)
        } else {
            dt = datosHeader;
            console.log(dt.home + "2222");
            changeLanguaje(!languaje)
        }

        console.log(dt.home)
        
    };

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
                                {dt.home}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                {dt.information}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                {dt.skills}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#portafolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                {dt.portfolio}
                            </a>
                        </li>


                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                {dt.contact}
                            </a>
                        </li>
                        <label class="switch" onClick={change}>
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
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