import React from "react";


const Languages = ({data}) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{data.languages}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">{data.spanish}</h3>
                            <span className="skills__level">{data.native}</span>
                        </div>
                    </div>    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">{data.french}</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>    
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">{data.english}</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Languages