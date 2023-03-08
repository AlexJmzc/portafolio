import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 


const WorkItems = ({item}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <Button variant="outline-light" onClick={handleShow}>
                <a className="work__button">
                    Ver más <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {item.descripcion}
                        <div class="row" id="gallery">
                            <div class="col">
                                <img src={item.images[0]} alt=""/>
                            </div>
                            <div class="col">
                                <img src={item.images[1]} alt=""/>
                            </div>
                            <div class="col">
                                <img src={item.images[2]} alt=""/>
                            </div>
                            <div class="col">
                                <img src={item.images[3]} alt=""/>
                            </div>
                        </div> 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="outline-success" onClick={handleClose}>
                        GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </Button>
                </Modal.Footer>
            </Modal>
            
       </div>
    )
}

export default WorkItems