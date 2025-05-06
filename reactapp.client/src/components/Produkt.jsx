import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const Produkt = ({ image, name, price, packageSize, quantity }) => {
    return (
        <Row className="mt-4 mb-5">
            <Col xs={6} sm={4}>
                <img className="obrazekKoszykZakupy" src={image} alt={name} />
                <FaTrash className="ikona-kosza mt-2" />
            </Col>
            <Col xs={6} sm={6} className="d-flex flex-column justify-content-center produktMargin">
                <h5>{name}</h5>
                <h6>{price} z?</h6>
                <h6>Opakowanie: {packageSize} szt.</h6>
                <div className="div">
                    <Button className="inputButton">-</Button>
                    <input type="text" value={quantity} className="input" readOnly />
                    <Button className="inputButton">+</Button>
                </div>
            </Col>
        </Row>
    );
};

export default Produkt;
