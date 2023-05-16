import React from "react";


const Info = ({data}) => {

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">
                    {data.experience_title}
                </h3>

                <span className="about__subtitle">
                    {data.time}
                </span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">
                    {data.projects_name}
                </h3>

                <span className="about__subtitle">
                    {data.projects_title}
                </span>
            </div>

            <div className="about__box">
                <i class="bx bx-support about__icon"></i>
                <h3 className="about__title">
                    {data.support_title}
                </h3>

                <span className="about__subtitle">
                    Online 24 / 7
                </span>
            </div>
        </div>
    )
}

export default Info