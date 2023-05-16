import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Carousel from 'react-bootstrap/Carousel';


const WorkItems = ({item}) => {
    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Componente
    return (
       <div className="work__card" key={item.projectID}>
            <img src={item.image} alt="" className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <Button variant="outline-light" onClick={handleShow}>
                <a className="work__button">
                    {item.more} <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        {item.descripcion}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    {item.close}
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