import React from "react";


const Backend = ({data}) => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">C#</h3>
                            <span className="skills__level">{data.level_intermediate}</span>
                        </div>
                    </div>
                    

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">{data.level_basic}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Backend