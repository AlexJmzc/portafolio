import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Carousel from 'react-bootstrap/Carousel';


const WorkItems = ({item}) => {
    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Carrusel de imágenes
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    //Componente
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
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {item.images.map(imagen => (
                                <Carousel.Item>
                                    
                                    <img
                                    src={imagen}
                                    alt=""
                                    />

                                    <Carousel.Caption>
                                    <h3>  </h3>
                                    <p>
                                       
                                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                            
                        </Carousel>
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