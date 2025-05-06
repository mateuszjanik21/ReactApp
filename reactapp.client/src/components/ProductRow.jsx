import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price} PLN</td>
            <td>
                <Button variant="info" size="sm">Szczegoly</Button>{' '}
                <Button variant="success" size="sm">Dodaj do koszyka</Button>{' '}
                <Button variant="warning" size="sm">Edytuj</Button>{' '}
                <Button variant="danger" size="sm">Usun</Button>
            </td>
        </tr>
    );
};

ProductRow.propTypes = {
    product: PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductRow;
