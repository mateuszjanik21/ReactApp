import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    return (
        <Col sm={6} md={4} lg={3}>
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.type}</Card.Subtitle>
                    <Card.Text>
                        <strong>Ilosc:</strong> {product.quantity}<br />
                        <strong>Cena:</strong> {product.price} PLN<br />
                        <strong>Data waznosci:</strong> {product.expiration}
                    </Card.Text>
                    <Button variant="primary" className="me-2">Dodaj do koszyka</Button>
                    <Button variant="info">Szczegoly</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        expiration: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
