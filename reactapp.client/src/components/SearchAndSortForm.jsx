import React from 'react';
import { Row, Col, Form, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchAndSortForm = ({ searchTerm, setSearchTerm, handleSort }) => {
    return (
        <Form className="mb-4">
            <Row>
                <Col sm={8}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Szukaj po nazwie"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="secondary" onClick={() => setSearchTerm('')}>Wyczysc</Button>
                    </InputGroup>
                </Col>
                <Col sm={4}>
                    <DropdownButton id="dropdown-basic-button" title="Sortuj wg">
                        <Dropdown.Item onClick={() => handleSort('name')}>Nazwa</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('type')}>Typ</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('quantity')}>Ilosc</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('price')}>Cena</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Form>
    );
};

SearchAndSortForm.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    handleSort: PropTypes.func.isRequired,
};

export default SearchAndSortForm;
