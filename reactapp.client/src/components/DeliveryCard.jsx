import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DeliveryCard = ({ orderId, deliveryDate, products, orderValue, pickupDate, pickupPerson }) => {
    return (
        <Card className="mb-3">
            <Card.Header>
                <Card.Title>Numer zamowienia: <Badge bg="info">{orderId}</Badge></Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <strong>Data zlozenia zamowienia:</strong> {deliveryDate}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Produkty:</strong>
                        <ul>
                            {products.map((product, index) => (
                                <li key={index}>{product}</li>
                            ))}
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Wartosc zamowienia:</strong> {orderValue} zl
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Data odbioru:</strong> {pickupDate}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Zamowienie odebrane przez:</strong> {pickupPerson}
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

DeliveryCard.propTypes = {
    orderId: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
    orderValue: PropTypes.string.isRequired,
    pickupDate: PropTypes.string.isRequired,
    pickupPerson: PropTypes.string.isRequired,
};

export default DeliveryCard;
