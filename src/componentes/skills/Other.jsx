import React from "react";


const Other = ({data}) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{data.others}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Github</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Scrum</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Jest</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Other