import React, { useEffect, useState } from "react";
import WorkItems from "./WorkItems";
import { projectsData, proyectosData } from "./Data";

const Works = ({languaje, nav}) => {
    const [dataWorks, setDataWorks] = useState(projectsData);
    const [item, setItem] = useState({name: "All"});
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState(0);


    useEffect(() => {
        if(languaje.name === "English") {
            setDataWorks(projectsData);
        } else {
            setDataWorks(proyectosData);
        }

        if(item.name === "All" || item.name === "Todos") {
            //setProjects(dataWorks);
            const newProjects = dataWorks.filter((project) => {
                return project.category !== 'Otro' & project.category !== 'Other';
            });

            setProjects(newProjects);
        } else {
            const newProjects = dataWorks.filter((project) => {
                return project.category === item.name;
            });
           
            setProjects(newProjects);
        }

        
    }, [dataWorks, item, languaje]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {nav.map((item, index) => {
                    return <span onClick={(e) => {
                        handleClick(e, index);
                    }} 
                    className={`${active === index ? "active-work" : ""}
                work__item`} key={index}>
                        {item.name}
                    </span>;
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item}/>
                })}
            </div>
        </div>
    )
}

export default Works