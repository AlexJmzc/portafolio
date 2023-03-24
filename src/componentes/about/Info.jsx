import { aboutData } from "./Data";
import React, { useState } from "react";


const Info = () => {
    const [data, setData] = useState(aboutData)

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">
                    {data[0].experience_title}
                </h3>

                <span className="about__subtitle">
                    1 year
                </span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">
                    Projects
                </h3>

                <span className="about__subtitle">
                    10 + Projects
                </span>
            </div>

            <div className="about__box">
                <i class="bx bx-support about__icon"></i>
                <h3 className="about__title">
                    Support
                </h3>

                <span className="about__subtitle">
                    Online 24 / 7
                </span>
            </div>
        </div>
    )
}

export default Info