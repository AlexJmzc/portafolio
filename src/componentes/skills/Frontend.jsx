import React from "react";


const Frontend = ({data}) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Laravel</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Frontend