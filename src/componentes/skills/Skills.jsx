import React, { useEffect, useState } from "react";
import "./skills.css";
import { skillsData } from "./Data";
import { datosSkills } from "./Data";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = ({languaje}) => {
    const[data, setData] = useState([]);

    useEffect(() => {
        if(languaje.name === 'English') {
            setData(skillsData);
        } else {
            setData(datosSkills);
        }
    })

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                {data.subtitle}
            </span>

            <div className="skills__container grid">
                <Frontend data={data}/>
                <Backend data={data}/>
            </div>
        </section>
    )
}

export default Skills